import { ethers, BrowserProvider } from "ethers";
import GreenTrustABI from "@/abi/GreenTrust.json";
import { contractAddress } from "@/config";
import * as PushAPI from "@pushprotocol/restapi";

export const getContract = (auth) => {
    const provider = new BrowserProvider(auth.provider);
    const GreenTrust = new ethers.Contract(
        contractAddress,
        GreenTrustABI,
        provider
    );
    return GreenTrust;
};

export const contractCall = async (auth, func, params = null) => {
    if (!auth?.isLoggedIn)
        return {
            status: 401,
            error: "Unauthorized",
        };
    const contract = getContract(auth);
    try {
        let data = await eval(`contract.${func}`)(...params);
        return {
            status: 200,
            data: data,
        };
    } catch (e) {
        return {
            status: 500,
            error: e,
        };
    }
};

export const sendNotification = async (signer, title, body, recipients) => {
    // apiResponse?.status === 204, if sent successfully!
    // apiResponse?.status === 204, if sent successfully!
    recipients = recipients.map((r) => `eip155:5:${r}`);
    const apiResponse = await PushAPI.payloads.sendNotification({
        //append 'eip155:5:' to every member of recipient array

        signer,
        type: 4, // subset
        identityType: 2, // direct payload
        notification: {
            title: title,
            body: body,
        },
        payload: {
            title: ``,
            body: ``,
            cta: '',
            img: ''
        },
        recipients: recipients, // recipients addresses
        channel: 'eip155:5:0xB7E99669e9eDdD2975511FBF059d01969f43D409', // your channel address
        env: 'staging'
    });
};

export const sendNotificationAll = async (signer, title, body) => {
    // apiResponse?.status === 204, if sent successfully!
    const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 1, // broadcast
        identityType: 2, // direct payload
        notification: {
            title: title,
            body: body
        },
        payload: {
            title: ``,
            body: ``,
            cta: '',
            img: ''
        },
        channel: 'eip155:5:0xB7E99669e9eDdD2975511FBF059d01969f43D409', // your channel address
        env: 'staging'
    });
}
