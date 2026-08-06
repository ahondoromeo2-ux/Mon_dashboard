def analyse_texte(texte):
    mots = texte.split()
    nb_mots = len(mots)
    resume = "Résumé automatique : " + " ".join(mots[:10]) + ("..." if nb_mots > 10 else "")
    return {
        "texte_original": texte,
        "nb_mots": nb_mots,
        "resume": resume
    }
