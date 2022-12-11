from random import choice

# a function that receives the player's choice
def user_selection():
    while True:     # looping when the user enters a different letter like R,r,P,p,S,s
        user = input("Enter a choice (Rock(r), Paper(p), Scissores(s)): ")
        user= user.lower()    # converting a capital letter to a lowercase letter
        if user == "r" or user == "p" or user == "s":
            return user


def computer_selection():
    letters_to_choose = ["r", "p", "s"]
    computer = choice(letters_to_choose)
    return computer




