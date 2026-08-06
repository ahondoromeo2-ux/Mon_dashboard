import sqlite3

def init_db():
    conn = sqlite3.connect("laboratoire.db")
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS resultats (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            texte_original TEXT,
            action TEXT,
            resultat TEXT,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    conn.close()

def ajouter_resultat(texte_original, action, resultat):
    conn = sqlite3.connect("laboratoire.db")
    c = conn.cursor()
    c.execute("INSERT INTO resultats (texte_original, action, resultat) VALUES (?, ?, ?)",
              (texte_original, action, resultat))
    conn.commit()
    conn.close()

def lire_resultats():
    conn = sqlite3.connect("laboratoire.db")
    c = conn.cursor()
    c.execute("SELECT id, texte_original, action, resultat, date FROM resultats ORDER BY date DESC")
    rows = c.fetchall()
    conn.close()
    return rows
