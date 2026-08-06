import requests

def get_horoscope(sign="taurus"):
    url = f"https://aztro.sameerkumar.website/?sign={sign}&day=today"
    response = requests.post(url).json()

    return {
        "signe": sign.capitalize(),
        "date": response["current_date"],
        "description": response["description"],
        "humeur": response["mood"],
        "couleur": response["color"],
        "nombre": response["lucky_number"],
        "temps_chanceux": response["lucky_time"]
    }
