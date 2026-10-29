import { useTranslation } from "../hooks/useTranslation";
import { LogoMark } from "./logo";

function Footer() {
    const { t } = useTranslation()
    return(
        <footer className="mt-10 border-t border-line">
            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
                <span className="flex items-center gap-2">
                    <LogoMark className="h-5 w-auto" />
                    <span className="font-display text-ink">Facundo Tateossian</span>
                </span>
                <p className="text-muted">© {new Date().getFullYear()} · {t("rights")}</p>
            </div>
        </footer>
    )
}

export default Footer;
