// by LvckyAPI - Iven Schlenther - LvckyWorld.NET
import fetch from "node-fetch";


/**
* * Send you a lost of all DNS emtries fith a specified IP-Adress from an Zone
* @param options POST BODY
* @param zoneID CloudFlare ZoneID
* @param filteredIP Specified IP to filter
* @param apiToken CloudFlare-API-Key
* @author LvckyAPI - Iven Schlenther - LvckyWorld.NET
*/
export async function post(options, dnsId: string, zoneID: string, accountMail: string, globalApiKey: string) {
    fetch(`https://api.cloudflare.com/client/v4/zones/${zoneID}/dns_records/${dnsId}`, {
        method: "patch",
        body: JSON.stringify(options),
        headers: {
            "X-Auth-Email": accountMail,
            "X-Auth-Key": globalApiKey,
            "Content-Type": "application/json",
        }
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}


/**
* * Send you a lost of all DNS emtries fith a specified IP-Adress from an Zone
* @param options POST BODY
* @param zoneID CloudFlare ZoneID
* @param filteredIP Specified IP to filter
* @param apiToken CloudFlare-API-Key
*/
export async function deleteAllRecords(dnsId: string, zoneID: string, accountMail: string, globalApiKey: string) {
    fetch(`https://api.cloudflare.com/client/v4/zones/${zoneID}/dns_records/${dnsId}`, {
        method: "delete",
        headers: {
            "X-Auth-Email": accountMail,
            "X-Auth-Key": globalApiKey,
            "Content-Type": "application/json",
        }
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}