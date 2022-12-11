def user_selection():
    while True:
        user = input("Enter a choice (Rock(r), Paper(p), Scissores(s)): ")
        user= user.lower()
        if user == "r" or user == "p" or user == "s":
            return user

