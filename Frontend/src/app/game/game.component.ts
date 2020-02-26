import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { identifierModuleUrl } from '@angular/compiler';
import { interval } from 'rxjs';
import { fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import * as P5 from 'p5';
import { HttpClient } from '@angular/common/http';
import { IpService } from '../services/ip.service';
import { DataService } from "../services/data.service";

var that: any;



let key
let moveMent = 150;
let rightPress = false
let leftPress = false
let game = true
let dx = 4
let dy = 4
let score = 0
let lives = 3
let livesRestart = false
const bricks = []
const brickColors = ["#f56642", "#f5ad42", "#f5ce42", "#cef542", "#8df542", "#4266f5", "#CCFFEE", "#CCFFDD"];
let win = false
let fastMode = 0
let kids = false;
const circle = {
  x: moveMent + 50,
  y: 380,
  radius: 20
}



const sketch = (p: P5) => {
  // IN ORDER TO PLAY - CLICK THE ON THE SCREEN
  // MOVE THE PADDLE WITH THE ARROW KEYS
  // SHOOT USING SPACEBAR


  p.setup = () => {
    p.createCanvas(600, 400);
    createBricks();
  }
  function paddle() {
    p.stroke('purple')
    p.fill('#FF6961')
    p.rect(moveMent, 385, 100, 15, 20)
    if (rightPress && moveMent < 500) {
      moveMent += 10
    }
    if (leftPress && moveMent > 0) {
      moveMent += -10
    }
  }

  function ball() {
    p.noStroke()
    p.fill('#FBD8F8')
    p.ellipse(circle.x, circle.y, circle.radius, circle.radius)
    if (circle.y <= 0) {
      dy = -dy
      //score++
    }
    if (circle.y >= p.height - 15 && circle.x > moveMent - fastMode && circle.x <= moveMent + 50) {
      dy = -dy
      if (dx > 0) dx = -dx
      if (dx < 0) dx = dx
    }
    if (circle.y >= p.height - 15 && circle.x > moveMent + 50 && circle.x <= moveMent + 100 + fastMode) {
      dy = -dy
      if (dx > 0) dx = dx
      if (dx < 0) dx = -dx
    }
    if (circle.x >= p.width - 10 || circle.x <= 0) dx = -dx

    bricks.forEach((item, index) => {
      if (checkCollisionBottom(circle, item)) {
        dy = -dy
        score++
        bricks.splice(index, 1)
      }
    })

    if (circle.y > p.height) {
      lives--
      livesRestart = true
      if (lives === 0) game = false
    }
    circle.x += dx
    circle.y += dy
  }

  function createBricks() {
    const rows = 6
    const cols = 10
    const brickWidth = p.width / cols
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let brick = {
          x: i * 58 + 10,
          y: j * 12 + 30,
          w: 57,
          h: 10,
          color: brickColors[j]
        }
        bricks.push(brick)
      }
    }
  }

  function drawBricks() {
    bricks.forEach(brick => {
      p.fill(brick.color)
      p.rect(brick.x, brick.y, brick.w, brick.h)
    })
  }



  function keyPress() {

    if (p.keyCode === 75) {
      kids = true
    }
    if (p.keyCode === 39) {
      rightPress = true
    }
    if (p.keyCode === 37) {
      leftPress = true
    }
    if (p.keyCode === 32 && livesRestart) {
      livesRestart = false
      circle.x = moveMent + 50
      circle.y = 380
    }
    if (p.keyCode === 32 && !game) {
      game = true
      circle.x = moveMent + 50
      circle.y = 380
      score = 0
      lives = 3
      dy = -6
      moveMent = 250
      createBricks()
    }
  };
  p.keyReleased = (value) => {
    if (p.keyCode === 39) {
      rightPress = false
    }
    if (p.keyCode === 37) {
      leftPress = false
    }
  };



  function restartGame() {
    p.fill('#FFEEEE')
    p.textAlign(p.CENTER);
    p.noStroke()
    p.textStyle(p.BOLD);
    p.textFont('Arial');
    p.textSize(38)
    p.text('GAME OVER', 300, 170)
    p.textFont('Arial');
    p.textSize(28);
    p.text('Final score: ' + score, 300, 200);
    p.textSize(18);
    p.text('Press Enter to end the game and go to scoreboard', 300, 225);



  }

  function winGame() {
    p.fill('#FFEEEE')
    p.textAlign(p.CENTER);
    p.noStroke()
    p.textStyle(p.BOLD);
    p.textFont('Arial');
    p.textSize(38)
    p.text('YOU WON', 300, 170)
    p.textFont('Arial');
    p.textSize(28);
    p.text('Final score: ' + score, 300, 200);
    p.textSize(18);
    p.text('Press Enter to end the game and go to scoreboard', 300, 225);



  }

  function lostLifeText() {
    p.fill('#FFEEEE')
    p.textAlign(p.CENTER);
    p.noStroke()
    p.textStyle(p.BOLD);
    p.textFont('Arial');
    p.textSize(36)
    p.text('Life Lost', 300, 170)
    p.textFont('Arial');
    p.textSize(24);
    p.text('You now have ' + lives + ' lives remaining', 300, 200);
    p.textSize(18);
    p.text('Press SpaceBar to restart', 300, 225);
  }

  function scoreText() {
    p.fill('#FFEEEE')
    p.textStyle(p.BOLD);
    p.textAlign(p.CENTER);
    p.noStroke()
    p.textFont('Arial');
    p.textSize(18);
    p.text('Score: ' + score, 555, 20);
  } 
  
  function kidsText() {
    p.fill('#FFEEEE')
    p.textStyle(p.BOLD);
    p.textAlign(p.CENTER);
    p.noStroke()
    p.textFont('Arial');
    p.textSize(14);
    p.text('Press "K" for kid mode', 300, 20);
  }

  function livesText() {
    p.textStyle(p.BOLD);
    p.textAlign(p.CENTER);
    p.noStroke()
    p.textFont('Arial');
    p.textSize(18);
    p.text('Lives: ' + lives, 40, 20);
  }

  function checkCollisionBottom(ball, brick) {
    if (ball.y - 20 < brick.y && ball.x > brick.x && ball.x <= brick.x + 58) {
      return true
    }
  }

  p.draw = () => {
    if (win) {
      winGame();
    }
    else {
      if (p.keyIsPressed === true) {
        keyPress();

      }

      p.background('#779ecb');
      if(kids) fastMode = 500
      if (game && !livesRestart) ball()
      if (livesRestart && game) lostLifeText()
      if (!game && livesRestart) restartGame()
      if (game) {
        scoreText()
        livesText()
        drawBricks()
        paddle()
        kidsText()
      }

      if (score == 60) {
        win = true;
      }
    }


  };

};

@Component({
  selector: 'app-game',
  template: '<div #sketch>{{message}}</div>',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  p5: P5;
  message: string;

  constructor(private http: HttpClient, private ip: IpService, private data: DataService, private router: Router) { }

  // append canvas created by p5 instance to HTML element
  @ViewChild('sketch', { static: true }) sketch: ElementRef;

  ngOnInit(): void {
    this.p5 = new P5(sketch, this.sketch.nativeElement);
    this.data.currentMessage.subscribe(message => this.message = message)
    // console.log(this.message);
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    key = event.code;

    if (key === "Enter") {
      this.setScore();
      this.router.navigate(['scoreboard']);
    }
  }
  setScore(): void {


    this.http.post<any>('http://' + this.ip.IP + ':3001/score', {

      name: this.data.text,
      score: score

    }).subscribe(
      x => {

        console.log(x);


      },
      error => { console.error(error); });
  }
}