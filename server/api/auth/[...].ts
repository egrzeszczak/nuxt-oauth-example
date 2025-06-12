import AzureAD from "next-auth/providers/azure-ad";
import { NuxtAuthHandler } from "#auth"

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error Use .default here for it to work during SSR.
        AzureAD.default({
            clientId: process.env.AZURE_AD_CLIENT_ID as string,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
            tenantId: process.env.AZURE_AD_TENANT_ID as string,
            authorization: { params: { scope: "openid profile email User.Read.All" } }
        })
    ],
    pages: {
        signIn: '/login'
    }
})