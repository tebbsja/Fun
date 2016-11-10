//
//  Card.h
//  Deck Geneartor
//
//  Created by Austin Tebbs on 7/21/16.
//  Copyright © 2016 Austin Tebbs. All rights reserved.
//

#ifndef Card_h
#define Card_h

#include <string>
#include <stdio.h>

using namespace std;

class Card
{
public:
    Card();
    ~Card();
    Card(string name, int elixir, string type, string role);
    void setType();
    void setRole();
    void setNum();
    void setElixir();
    string getName();
    int getElixir();
    string getType();
    string getRole();

private:
    string name;
    string type;
    string role;
    int num;
    int elixir;
    
};

#endif /* Card_h */
