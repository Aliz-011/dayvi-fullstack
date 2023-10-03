import { ReactNode, FC } from "react";

interface StatusCardProps {
    title: string;
    subtitle: string;
    data: number;
    icon?: ReactNode;
}

const StatusCard: FC<StatusCardProps> = ({ title, subtitle, data, icon }) => {
    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    const formattedNumberToCurrency = (num: number) => {
        return num.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
        });
    };

    return (
        <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{title}</p>
                <span className="shrink-0">{icon}</span>
            </div>

            <p className="mt-1.5 text-xl font-bold">+{formatNumber(data)}</p>
            <p className="mt-1.5 text-xs font-light text-muted-foreground">
                {subtitle}
            </p>
        </div>
    );
};

export default StatusCard;
