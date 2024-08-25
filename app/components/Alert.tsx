import clsx from "clsx";
import type * as React from "react";
import { assertUnreachable } from "~/utils/types";
import { AlertIcon } from "./icons/Alert";
import { CheckmarkIcon } from "./icons/Checkmark";
import { ErrorIcon } from "./icons/Error";
import { useTranslation } from "react-i18next";

export type AlertVariation = "INFO" | "WARNING" | "ERROR" | "SUCCESS";

export function Alert({
	children,
	textClassName,
	alertClassName,
	variation = "INFO",
	tiny = false,
}: {
	children: React.ReactNode;
	textClassName?: string;
	alertClassName?: string;
	variation?: AlertVariation;
	tiny?: boolean;
}) {
	return (
		<div
			className={clsx("alert", alertClassName, {
				tiny,
				warning: variation === "WARNING",
				error: variation === "ERROR",
				success: variation === "SUCCESS",
			})}
		>
			<Icon variation={variation} />{" "}
			<div className={textClassName}>{children}</div>
		</div>
	);
}

function Icon({ variation }: { variation: AlertVariation }) {
  const { t } = useTranslation();
  
	switch (variation) {
		case "INFO":
			return <AlertIcon alt={t("icons.alert")} />;
		case "WARNING":
			return <AlertIcon alt={t("icons.alert")} />;
		case "ERROR":
			return <ErrorIcon />;
		case "SUCCESS":
			return <CheckmarkIcon alt={t("icons.checkmark")} />;
		default:
			assertUnreachable(variation);
	}
}
