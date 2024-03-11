function OptionNavigation({ HRef = "", Libelle, Actif = "non" }) {
    const active = Actif === "active" ? "liensNav pageActive" : "liensNav";
    return (
        <a href={HRef} className={ active } > {Libelle}</a >
    );
}

export default OptionNavigation;