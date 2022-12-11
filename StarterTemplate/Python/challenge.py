from random import choice   # import from random choice function

# a function that receives the player's choice


def user_selection():
    while True:     # looping when the user enters a different letter like R,r,P,p,S,s
        user = input("Enter a choice (Rock(r), Paper(p), Scissores(s)): ")
        user = user.lower()    # converting a capital letter to a lowercase letter
        if user == "r" or user == "p" or user == "s":
            return user


# computer randomization function
def computer_selection():
    # a list of items from which one will be random
    letters_to_choose = ["r", "p", "s"]
    computer = choice(letters_to_choose)  # random selection of one
    return computer


# function displays the rules of the game
def display_rules():
    print("The Winning Rules are as follows:")
    print()
    print("ROCK smashes SCISSORS.")
    print("PAPER covers ROOCK")
    print("SCISSORS cut PAPER")


def if_play_again():
    while True:
        play_a = input("Play again? (y/n): ")
        play_a = play_a.lower()
        if play_a == "y":
            return True
        elif play_a == "n":
            return False


dict_full_name = {"r": "ROCK", "p": "PAPER", "s": "SCISSORS"}

display_rules()
score_player = 0
score_computer = 0
play_again = True

while play_again:
    computer = computer_selection()
    player = user_selection()
    if computer == player:
        print(f"Both players selected {dict_full_name[computer]}. It's a tie!")
    elif (computer == "r" and player == "s") or (computer == "p" and player == "r") or (computer == "s" and player == "p"):
        print(
            f"The computer chose {dict_full_name[computer]}, You chose {dict_full_name[player]}.")
        print("COMPUTER WINS !!!")
        score_computer += 1
    else:
        print(
            f"The computer chose {dict_full_name[computer]}, You chose {dict_full_name[player]}.")
        print("YOU WINS !!!")
        score_player += 1
    play_again = if_play_again()

print("FINAL SCORES:")
print(f"Computer: {score_computer}")
print(f"Player: {score_player}")
