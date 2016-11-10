//
//  main.cpp
//  Deck Geneartor
//
//  Created by Austin Tebbs on 6/4/16.
//  Copyright © 2016 Austin Tebbs. All rights reserved.
//

#include <iostream>
#include <ctime>
#include "Card.h"
#include <vector>
#include <map>

using namespace std;

string radomize()
{
    return "string";
}


void noLegGen()
{
    int card1, card2, card3, card4, card5, card6, card7, card8;
    card1 = rand() % 49 + 1;
    cout << card1 << endl;
    card2 = rand() % 49 + 1;
    cout << card2 << endl;
    card3 = rand() % 49 + 1;
    cout << card3 << endl;
    card4 = rand() % 49 + 1;
    cout << card4 << endl;
    card5 = rand() % 49 + 1;
    cout << card5 << endl;
    card6 = rand() % 49 + 1;
    cout << card6 << endl;
    card7 = rand() % 49 + 1;
    cout << card7 << endl;
    card8 = rand() % 49 + 1;
    cout << card8 << endl;
}

Card legendaryGen()
{
    const int ARCHERS = 1;
    const int ARROWS = 2;
    const int BARBS = 3;
    const int BOMBER = 4;
    const int CANNON = 5;
    const int FIRESPIRITS = 6;
    const int GOBLINS = 7;
    const int KNIGHT = 8;
    const int M_HORDE = 9;
    const int MINIONS = 10;
    const int MORTAR = 11;
    const int R_GIANT = 12;
    const int SKELETONS = 13;
    const int SPEAR_GOBS = 14;
    const int TESLA = 15;
    const int ZAP = 16;
    const int BARB_HUT = 17;
    const int BOMB_TOWER = 18;
    const int PUMP = 19;
    const int FIREBALL = 20;
    const int FURNACE = 21;
    const int GIANT = 22;
    const int GOB_HUT = 23;
    const int HOG = 24;
    const int INFERNO = 25;
    const int MINI_PEKKA = 26;
    const int MUSK = 27;
    const int ROCKET = 28;
    const int THREE_MUSK = 29;
    const int TOMBSTONE = 30;
    const int VALK = 31;
    const int WIZARD = 32;
    const int BABY_DRAGON =33;
    const int BALLOON = 34;
    const int DARK_PRINCE = 35;
    const int FREEZE = 36;
    const int GIANT_SKELLY = 37;
    const int GOBLIN_BARRELL = 38;
    const int GOLEM = 39;
    const int GUARDS = 40;
    const int LIGHTNING = 41;
    const int MIRROR = 42;
    const int PEKKA = 43;
    const int POISON = 44;
    const int PRINCE = 45;
    const int RAGE = 46;
    const int SKELETON_ARMY = 47;
    const int WITCH = 48;
    const int XBOW = 49;
    const int ICE_WIZARD = 50;
    const int LAVA_HOUND = 51;
    const int MINER = 52;
    const int PRINCESS = 53;
    const int SPARKY = 54;
    const int BOWLER = 55;
    const int ICE_SPIRIT = 56;
    const int LUMBERJACK = 57;
    const int LOG = 58;
    
    //vector<Card> deck;
    Card temp;
    
    int card1;
    card1 = rand() % 58 + 1;
    switch (card1)
    {
    case ARCHERS:
    {
        temp = Card("Archers", 3, "Troop", "DPS");
        break;
    }
    case ARROWS:
    {
        temp = Card("Arrows", 3, "Spell", "Damage");
        break;
    }
case BARBS:
    {
        temp = Card("Barbarians", 5, "Troop", "Tank DPS");
        break;
    }
case BOMBER:
    {
        temp = Card("Bomber", 3, "Troop", "Ground Splash");
        break;
    }
case CANNON:
    {
        temp = Card("Cannon", 3, "Building", "Defense");
        break;
        
    }
case FIRESPIRITS:
    {
        temp = Card("Fire Spirits", 2, "Troop", "Splash");
        break;
    }
case GOBLINS:
    {
        temp = Card("Goblins", 2, "Troop", "Ground DPS");
        break;
    }
case KNIGHT:
    {
        temp = Card("Knight", 3, "Troop", "Tank");
        break;
    }
case M_HORDE:
    {
        temp = Card("Minion Horde", 5, "Troop", "Air DPS");
        break;
    }
case MINIONS:
    {
        temp = Card("Minions", 3, "Troop", "Air DPS");
    break;
    }
case MORTAR:
    {
        temp = Card("Mortar", 4, "Building", "Ground Splash");
        break;
    }
case R_GIANT:
    {
        temp = Card("Royal Giant", 6, "Troop", "Building Damage");
        break;
    }
case SKELETONS:
    {
        temp = Card("Skeletons", 1, "Troop", "Ground DPS");
        break;
    }
case SPEAR_GOBS:
    {
        temp = Card("Spear Goblins", 2, "Troop", "DPS");
        break;
    }
case TESLA:
    {
        temp = Card("Tesla", 4, "Building", "Defense");
        break;
    }
case ZAP:
    {
        temp = Card("Zap", 2, "Spell", "Damage");
        break;
        
    }
case BARB_HUT:
    {
        temp = Card("Barbarian Hut", 7, "Building", "Spawner");
        break;
        
    }
case BOMB_TOWER:
    {
        temp = Card("Bomb Tower", 5, "Building", "Defense");
        break;
    }
case PUMP:
    {
        temp = Card("Elixir Pump", 5, "Building", "Buff");
        break;
    }
case FIREBALL:
    {
        temp = Card("Fireball", 4, "Spell", "Damage");
        break;
    }
case FURNACE:
    {
        temp = Card("Furnace", 4, "Building", "Spawner");
        break;
    }
case GIANT:
    {
        temp = Card("Giant", 5, "Troop", "Tank");
        break;
    }
case GOB_HUT:
    {
        temp = Card("Goblin Hut", 5, "Building", "Spawner");
        break;
    }
case HOG:
    {
        temp = Card("Hog Rider", 4, "Troop", "Building Damage");
        break;
    }
case INFERNO:
    {
        temp = Card("Inferno Tower", 5, "Building", "Defense");
        break;
    }
case MINI_PEKKA:
    {
        temp = Card("Mini Pekka", 4, "Troop", "DPS");
        break;
    }
case MUSK:
    {
        temp = Card("Musketeer", 4, "Troop", "DPS");
        break;
    }
case ROCKET:
    {
        temp = Card("Rocket", 6, "Spell", "Damage");
        break;
    }
case THREE_MUSK:
    {
        temp = Card("Three Musketeers", 9, "Troop", "DPS");
        break;
    }
case TOMBSTONE:
    {
        temp = Card("Tombstone", 3, "Building", "Spawner");
        break;
    }
case VALK:
    {
        temp = Card("Valkyrie", 4, "Troop", "Tank");
        break;
    }
case WIZARD:
    {
        temp = Card("Wizard", 5, "Troop", "Splash");
        break;
    }
case BABY_DRAGON:
    {
    temp = Card("Baby Dragon", 4, "Troop", "Splash");
        break;
    }
case BALLOON:
    {
        temp = Card("Balloon", 5, "Troop", "Building Damage");
        break;
    }
case DARK_PRINCE:
    {
        temp = Card("Dark Prince", 4, "Troop", "Splash");
        break;
    }
case FREEZE:
    {
        temp = Card("Freeze", 4, "Spell", "Buff");
        break;
    }
case GIANT_SKELLY:
    {
        temp = Card("Giant Skeleton", 6, "Troop", "Tank");
        break;
    }
case GOBLIN_BARRELL:
    {
        temp = Card("Goblin Barrell", 3, "Troop", "DPS");
        break;
    }
case GOLEM:
    {
        temp = Card("Golem", 8, "Troop", "Tank");
        break;
    }
case GUARDS:
    {
        temp = Card("Guards", 3, "Troop", "DPS");
        break;
    }
case LIGHTNING:
    {
        temp = Card("Lightning", 6, "Spell", "Damage");
        break;
    }
case MIRROR:
    {
        temp = Card("Mirror", 0, "N/A", "N/A");
        break;
    }
case PEKKA:
    {
        temp = Card("Pekka", 7, "Troop", "Tank");
        break;
    }
case POISON:
    {
        temp = Card("Poison", 4, "Spell", "Damage");
        break;
    }
case PRINCE:
    {
        temp = Card("Prince", 5, "Troop", "DPS");
        break;
    }
case RAGE:
    {
        temp = Card("Rage", 3, "Spell", "Buff");
        break;
    }
case SKELETON_ARMY:
    {
        temp = Card("Skeleton Army", 4, "Troop", "DPS");
        break;
        
    }
case WITCH:
    {
        temp = Card("Witch", 5, "Troop", "Spawner");
        break;
    }
case XBOW:
    {
        temp = Card("Xbow", 6, "Building", "Offense");
        break;
        
    }
case ICE_WIZARD:
    {
        temp = Card("Ice Wizard", 3, "Troop", "Splash");
        break;
    }
case LAVA_HOUND:
    {
        temp = Card("Lava Hound", 7, "Troop", "Building Damage");
        break;
    }
case MINER:
    {
        temp = Card("Miner", 3, "Troop", "Tank");
        break;
        
    }
case PRINCESS:
    {
        temp = Card("Princess", 3, "Troop", "Splash");
        break;
    }
case SPARKY:
    {
     
        temp = Card("Sparky", 6, "Troop", "Splash");
        break;
    }
case BOWLER:
    {
  
        temp = Card("Bowler", 6, "Troop", "Splash");
        break;
    }
case ICE_SPIRIT:
    {

        temp = Card("Ice Spirit", 1, "Troop", "Buff");
        break;
    }
case LUMBERJACK:
{
    temp = Card("Lumberjack", 4, "Troop", "DPS");
    break;
}
        case LOG:
        {
            temp = Card("Log", 2, "Spell", "Damage");
            break;
        }
            
            
}
    
    return temp;
   }

bool checkElixir(map<string, Card>& deck)
{
    double avg_elixir = 0;
    
    for (auto cards : deck)
    {
        avg_elixir += cards.second.getElixir();
    }
    
    avg_elixir = avg_elixir / 8;
    
    cout << avg_elixir << endl << endl;
    if (avg_elixir > 4.5)
    {
        return false;
    }
    
    return true;
    
}
int checkBuildings(map<string, Card> deck)
{
    int num_buildings = 0;
    for (auto cards : deck)
    {
        if (cards.second.getType() == "Building" && cards.second.getRole() == "Defense")
        {
            num_buildings++;
        }
    }
    
    //cout << "build " << num_buildings << endl << endl;
    
    return num_buildings;
}


map<string,Card> generateDeck()
{
    map<string, Card> deck;
    Card temp;
    while (deck.size() < 8)
    {
        temp = legendaryGen();
        
        deck.insert(pair<string, Card>(temp.getName(), temp));
    }
    
    while(!checkElixir(deck))
    {
        deck = generateDeck();
    }
    
    if (checkBuildings(deck) > 1)
    {
        deck = generateDeck();
    }
    
 
    return deck;
}





void menu()
{
    int answer = 0;
    cout << "\nDo you want to include legendaries?\n";
    cout << "(1) Yes\n";
    cout << "(2) No\n\n";
    cin >> answer;
    
    map<string, Card> deck;
    
    if (answer == 1)
    {
        deck = generateDeck();
        for (auto card : deck)
        {
            cout << card.first << endl;
        }
    }
    else
    {
        noLegGen();
    }
}



int main()
{
    srand(time(0));
    
    while (1)
    {
        
        menu();
    }
    

    return 0;
}
