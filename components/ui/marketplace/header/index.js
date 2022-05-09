import { useAccount } from "@components/hooks/web3";
import { Breadcrumbs } from "@components/ui/common";
import { EthRates, WalletBar } from "@components/ui/web3";

const LINKS = [{
    href: "/marketplace",
    value: "Buy"
}, {
    href: "/marketplace/services/owned",
    value: "My Services"
}, {
    href: "/marketplace/services/managed",
    value: "Manage Services",
    requireAdmin: true
}]

export default function Header() {
    const { account } = useAccount()
    return (
        <>
        <div className="pt-4">
        <WalletBar />
        </div>
        <EthRates />
        <div className="flex flex-row-reverse p-4 sm:px-6 lg:px-8">
            <Breadcrumbs 
                isAdmin={account.isAdmin}
                items={LINKS} 
            />
        </div>
        </>
    )   
}