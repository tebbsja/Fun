//
//  Card.cpp
//  Deck Geneartor
//
//  Created by Austin Tebbs on 7/21/16.
//  Copyright © 2016 Austin Tebbs. All rights reserved.
//

#include "Card.h"

Card::Card(){}

Card::~Card(){}

Card::Card(string name, int elixir, string type, string role)
{
    this->name = name;
    this->elixir = elixir;
    this->type = type;
    this->role = role;
}

string Card::getName()
{
    return name;
}
int Card::getElixir()
{
    return elixir;
}
string Card::getType()
{
    return type;
}
string Card::getRole()
{
    return role;
}
