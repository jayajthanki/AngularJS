import { Component, OnInit } from '@angular/core';
import { Card, UnoDeck, Player } from '../model/Uno';

@Component({
  selector: 'app-unogame',
  templateUrl: './unoCards.component.html',
  styleUrls: ['./unoCards.component.css']
})
export class UnogameComponent implements OnInit {

  totalPlayers: number;
  playerArray: Player[] = [];
  deck: UnoDeck;

  constructor() { }

  ngOnInit() {
    this.totalPlayers = 2;
  }

  public addPlayer(): void {
    if (this.totalPlayers < 7) {
      
      this.totalPlayers++;
    }
  }

  public removePlayer(): void {

    if (this.totalPlayers > 2) {

      this.totalPlayers--;
    }
  }

  public Start(): void {

    this.playerArray = [];

    this.deck = new UnoDeck();

    for (let n = 0; n < this.totalPlayers; n++) {

      let cards = [];

      for (let i = 0; i < 7; i++) {

        cards[i] = this.deck.take();
      }

      this.playerArray.push({

        cards: cards
      });
    }
  }

}
