// ============ Basic Parameters =============
const VIRTUAL_W = 7680;
const VIRTUAL_H = 5760;
let scaleFactor = 1, offsetX = 0, offsetY = 0;

let margin, winLeft, winRight, winTop, winBottom, horizonY;
let clockCx, clockCy, clockRadius;
let digitalX, digitalY, digitalW, digitalH;
let lastMillis = 0;

let currentTime = 12.0;
let dragging = false;
let isTimeFlowing = true;

let speedFactors = [1, 100, 10000, 100000];
let speedIdx = 0;
let timeSpeed = speedFactors[speedIdx];

let skyColors = [
  { h: 0,   top:'#142046', bot:'#222d4c' },
  { h: 4,   top:'#142046', bot:'#222d4c' },
  { h: 6,   top:'#3A355B', bot:'#6A517B' },
  { h: 7,   top:'#7CA3C7', bot:'#F2AF88' },
  { h: 8,   top:'#A8CAE3', bot:'#F6D9A6' },
  { h: 10,  top:'#88BEE9', bot:'#D5EDF8' },
  { h: 12,  top:'#1882C7', bot:'#A1D7F4' },
  { h: 16,  top:'#2486D3', bot:'#B4E0F6' },
  { h: 18,  top:'#B1909D', bot:'#F2B889' },
  { h: 19,  top:'#2E3C69', bot:'#B6A2A9' },
  { h: 21,  top:'#1B2647', bot:'#25315A' },
  { h: 24,  top:'#142046', bot:'#222d4c' }
];
//I sample the colors of skyColors by uploading the photos I took myself to chatgpt

// ==== Starry Sky ====
let starTrailBuffer;
let stars = [];
const STAR_NUM = 4000;
const STAR_TRAIL_ALPHA = [65, 44, 32, 14];

// ==== Flowers on Grassland ====
let flowers = [];
const FLOWER_NUM = 340;

// ==== Cats ====
let cats = [];
const CAT_SIZE = 140;

// ==== Books ====
let books = []; // [{x, y, w, h, color, accent, standing, side, anim, animDir}]

// ==== Meteors ====
let meteors = [];
const METEOR_SPAWN_RATE = 0.013;
const METEOR_MIN_DIST = 960;
const METEOR_MAX_DIST = 1080;
const METEOR_LIFE = 500; // ms
const METEOR_TAIL_PARTS = 9;

// ============ Interpolation ============
function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - pow(-2 * t + 2, 3) / 2;
}

// ============ Setup ============
function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateViewport();
  angleMode(DEGREES);

  margin = VIRTUAL_W * 0.15;
  winLeft = margin;
  winRight = VIRTUAL_W - margin;
  winTop = margin;
  winBottom = VIRTUAL_H - margin;
  horizonY = winTop + (winBottom - winTop) * (2 / 3);

  clockRadius = min(VIRTUAL_W, VIRTUAL_H) * 0.075;
  clockCx = winRight + clockRadius * 1.05;
  clockCy = winTop - clockRadius * 0.57;

  digitalW = 1050;
  digitalH = 300;
  let deskTop = winBottom + (VIRTUAL_H - winBottom) * 0.07;
  let deskBot = deskTop + (VIRTUAL_H - winBottom) * 0.12;
  digitalY = deskBot + 160;
  digitalX = VIRTUAL_W/2 - digitalW/2;

  starTrailBuffer = createGraphics(winRight-winLeft, horizonY-winTop);
  starTrailBuffer.clear();
  initStars();
  initFlowers();
  initCats();
  initBooks();

  lastMillis = millis();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateViewport();
  starTrailBuffer = createGraphics(winRight-winLeft, horizonY-winTop);
  starTrailBuffer.clear();
  initStars();
  initFlowers();
  initCats();
  initBooks();
}

// ================= draw ==================
function draw() {
  if (!dragging && isTimeFlowing) {
    let now = millis();
    let dt = (now - lastMillis) / 1000.0;
    timeSpeed = speedFactors[speedIdx];
    currentTime += dt * (timeSpeed / 3600.0);
    if (currentTime >= 24) currentTime -= 24;
    lastMillis = now;
  } else {
    lastMillis = millis();
  }

  background(0);

  push();
  translate(offsetX, offsetY);
  scale(scaleFactor);

  drawInterior();
  drawSky(currentTime);

  // ================ Landscape mask layer (sun, moon, mountains, grass, flowers, cats) ===============
  push();
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(winLeft, winTop, winRight-winLeft, winBottom-winTop);
  drawingContext.clip();

  drawMountains();
  drawGrass(currentTime);
  drawFlowers(currentTime);
  drawCats(currentTime);

  drawingContext.restore();
  pop();

  drawWindowFrame();
  drawClockDial(currentTime);
  drawDigitalClock(currentTime);

  pop();
  drawLetterbox();
}

// ========== Interior Background ===========
function drawInterior() {
  for (let y = 0; y < VIRTUAL_H; y += 20) {
    let c = lerpColor(color('#e3b17d'), color('#c99a65'), map(y, 0, VIRTUAL_H, 0, 1));
    fill(c);
    noStroke();
    rect(0, y, VIRTUAL_W, 20);
  }
  stroke(180, 120, 60, 28);
  for (let x = 80; x < VIRTUAL_W; x += 120) {
    line(x, 0, x, VIRTUAL_H);
  }
  let floorY = winBottom + (VIRTUAL_H-winBottom)*0.19;
  for (let y = floorY; y < VIRTUAL_H; y += 48) {
    let c = lerpColor(color('#9c7753'), color('#6e4d2d'), map(y, floorY, VIRTUAL_H, 0, 1));
    fill(c);
    noStroke();
    let w = map(y, floorY, VIRTUAL_H, VIRTUAL_W, VIRTUAL_W*1.1);
    let x0 = (VIRTUAL_W - w)/2;
    rect(x0, y, w, 48);
    stroke(80,60,40,45); line(x0, y, x0+w, y);
  }
  let deskTop = winBottom + (VIRTUAL_H-winBottom)*0.07;
  let deskBot = deskTop + (VIRTUAL_H-winBottom)*0.12;
  fill('#e6c290');
  stroke('#af916a'); strokeWeight(14);
  rect(winLeft-60, deskTop, winRight-winLeft+120, deskBot-deskTop, 80);

  drawBooks();
}

// ========== Book Animation and Interaction ===========
function drawBooks() {
  let animSpeed = 0.045;
  for (let book of books) {
    if (book.animDir !== 0) {
      book.anim += book.animDir * animSpeed;
      book.anim = constrain(book.anim, 0, 1);
      if (book.anim === 0 || book.anim === 1) book.animDir = 0;
    }
    let t = easeInOutCubic(book.anim);
    let angle = 0;
    if (book.side === "left") angle = lerp(0, -90, t);
    else angle = lerp(0, 90, t);

    push();
    // Pivot: left book left-bottom, right book right-bottom
    translate(book.x, book.y + book.h/2);
    if (book.side === "left") {
      translate(-book.w/2, 0);
      rotate(angle);
      translate(book.w/2, 0);
    } else {
      translate(book.w/2, 0);
      rotate(angle);
      translate(-book.w/2, 0);
    }
    fill(book.color);
    stroke("#545454"); strokeWeight(11);
    rectMode(CENTER);
    rect(0, -book.h/2, book.w, book.h, 36);
    fill(book.accent);
    noStroke();
    rect(0, -book.h*0.30, book.w*0.92, book.h*0.10, 13);
    fill(255,255,255,36);
    ellipse(0, -book.h*0.41, book.w*0.44, book.h*0.16);
    pop();
  }
}

function initBooks() {
  let bookW1 = 240, bookH1 = 520;
  let bookW2 = 210, bookH2 = 520;
  let bookBaseY = digitalY + digitalH - bookH1 / 2;
  books = [
    {
      x: winLeft - 140,
      y: bookBaseY + 45,
      w: bookW1,
      h: bookH1,
      color: "#6288e6",
      accent: "#fff6d2",
      standing: true,
      side: "left",
      anim: 0,
      animDir: 0
    },
    {
      x: winRight + 140,
      y: bookBaseY + 45,
      w: bookW2,
      h: bookH2,
      color: "#f6c14a",
      accent: "#b78624",
      standing: true,
      side: "right",
      anim: 0,
      animDir: 0
    }
  ];
}

function isPointOnBook(mx, my, book) {
  let x0 = book.x - book.w/2, x1 = book.x + book.w/2;
  let y0 = book.y - book.h, y1 = book.y + book.h/2;
  return mx > x0 && mx < x1 && my > y0 && my < y1;
}

// ========== Starry Sky ===========
function initStars() {
  stars = [];
  for(let i=0;i<STAR_NUM;i++){
    let x0 = random(0, starTrailBuffer.width);
    let y0 = random(0, starTrailBuffer.height);
    let baseBright = random(225,255);
    let r = random(1.2,2.8);
    let speed = random(0.25,0.54);
    let phase = random(TWO_PI);
    stars.push({x0, y0, r, baseBright, speed, phase});
  }
}
function drawStarsWithTrail(time) {
  let buf = starTrailBuffer;
  let fade = STAR_TRAIL_ALPHA[speedIdx] / 255.0;
  buf.push();
  buf.noStroke();
  buf.fill(0, 0, 0, fade * 255);
  buf.rect(0, 0, buf.width, buf.height);
  buf.pop();
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    let t = ((currentTime + s.phase * 12 + 24) % 24) / 24.0;
    let x = (s.x0 + buf.width * t * s.speed * 0.93) % buf.width;
    let y = (s.y0 + buf.height * t * s.speed * 0.93) % buf.height;
    let bright = min(s.baseBright + 70 * sin(TWO_PI * (t + s.phase)), 255);
    buf.noStroke();
    buf.fill(bright, bright, 255, 255);
    buf.ellipse(x, y, s.r);
  }
}

// ========== Meteors ===========
function drawMeteors(){
  if (currentTime < 6.3 || currentTime >= 18.2) {
    if(random()<METEOR_SPAWN_RATE){
      let px = random(winLeft+200, winRight-200);
      let py = random(winTop+80, horizonY-150);
      let angle = random(PI*0.13, PI*1.87);
      angle += noise(frameCount*0.1, px*0.002, py*0.002) * 0.8 - 0.4;
      let dist = random(METEOR_MIN_DIST, METEOR_MAX_DIST);
      let start = millis();
      meteors.push({x0:px, y0:py, angle, dist, start, life:METEOR_LIFE});
    }
    for(let i=meteors.length-1;i>=0;i--){
      let m = meteors[i];
      let elapsed = millis() - m.start;
      if(elapsed > m.life){
        meteors.splice(i,1);
        continue;
      }
      let f = elapsed / m.life;
      let dx = cos(m.angle)*m.dist;
      let dy = sin(m.angle)*m.dist;
      let x1 = m.x0 + dx*f;
      let y1 = m.y0 + dy*f;
      for(let t=METEOR_TAIL_PARTS;t>=1;t--){
        let ftail = constrain(f-t*0.04,0,1);
        if(ftail<=0) continue;
        let tx = m.x0 + dx*ftail;
        let ty = m.y0 + dy*ftail;
        let alpha = map(t,1,METEOR_TAIL_PARTS,200,50) * (1-f);
        stroke(255,230,170, alpha);
        strokeWeight(map(t,1,METEOR_TAIL_PARTS,5,1));
        line(tx,ty, x1,y1);
      }
      noStroke();
      fill(255,255,230, 180*(1-f));
      ellipse(x1,y1,17,7.8);
      fill(255,230,120,110*(1-f));
      ellipse(x1,y1,34,12);
    }
  } else {
    meteors = [];
  }
}

// ========== Clouds ===========
function drawClouds(time, level=1.0){
  let cloudSpeedBase = [1, 10, 100, 10000];
  let cloudSpeed = cloudSpeedBase[speedIdx];
  let baseCloud = 3;
  let cloudCount = round(baseCloud + 8*level);
  for(let c=0;c<cloudCount;c++){
    let t = millis()/9000 * cloudSpeed + c*233;
    let cx = winLeft + (winRight-winLeft)*noise(c*110, t);
    let cy = winTop + (horizonY-winTop)*noise(c*200, t+101)*0.5;
    drawCloud(cx, cy, 330+noise(c*3)*110, 65+noise(c*9)*60);
  }
}
function drawCloud(x, y, w, h){
  if(x-w*0.6<winLeft || x+w*0.6>winRight || y-h*0.6<winTop || y+h*0.6>horizonY) return;
  noStroke();
  fill(255,225,225,95);
  ellipse(x, y, w, h);
  ellipse(x-w*0.23, y+8, w*0.7, h*0.7);
  ellipse(x+w*0.31, y+12, w*0.57, h*0.6);
}

// ========== Grass ===========
function drawGrass(time) {
  let duskStart = 17.3, duskEnd = 18.2, dawnStart = 5.5, dawnEnd = 6.3;
  let dayCol = color(100, 210, 140);
  let nightCol = color(44, 87, 66);
  let grassCol;
  if (time >= duskEnd && time < 24 || time >= 0 && time < dawnStart) {
    grassCol = nightCol;
  } else if (time >= duskStart && time < duskEnd) {
    let t = map(time, duskStart, duskEnd, 0, 1);
    grassCol = lerpColor(dayCol, nightCol, t);
  } else if (time >= dawnStart && time < dawnEnd) {
    let t = map(time, dawnStart, dawnEnd, 0, 1);
    grassCol = lerpColor(nightCol, dayCol, t);
  } else {
    grassCol = dayCol;
  }
  noStroke();
  fill(grassCol);
  rect(winLeft, horizonY, winRight-winLeft, winBottom - horizonY);
}

// ========== Mountains ===========
function drawMountains() {
  let alpha = getMountainAlpha(currentTime);
  for (let i = 0; i < 3; i++) {
    fill(90 + 18 * i, 120 + 10 * i, 120 + 10 * i, alpha - 30 * i);
    beginShape();
    vertex(winLeft, horizonY);
    for (let x = winLeft; x <= winRight; x += 60) {
      let y = horizonY - 220 - 140 * i + 110 * noise(i * 321 + x * 0.004);
      vertex(x, y);
    }
    vertex(winRight, horizonY);
    endShape(CLOSE);
  }
}
function getMountainAlpha(time) {
  let duskStart = 17.3, duskEnd = 18.2, dawnStart = 5.5, dawnEnd = 6.3;
  let dayAlpha = 160, nightAlpha = 75;
  if (time >= duskEnd && time < 24 || time >= 0 && time < dawnStart) {
    return nightAlpha;
  } else if (time >= duskStart && time < duskEnd) {
    let t = map(time, duskStart, duskEnd, 0, 1);
    return lerp(dayAlpha, nightAlpha, t);
  } else if (time >= dawnStart && time < dawnEnd) {
    let t = map(time, dawnStart, dawnEnd, 0, 1);
    return lerp(nightAlpha, dayAlpha, t);
  } else {
    return dayAlpha;
  }
}

// ========== Flowers ===========
function initFlowers() {
  flowers = [];
  for (let i = 0; i < FLOWER_NUM; i++) {
    let relY = random(0, 1);
    let relX = random(0, 1);
    let px = lerp(winLeft+30, winRight-30, relX);
    let py = lerp(horizonY+20, winBottom-40, pow(relY, 1.7));
    let size = lerp(14, 38, pow(relY, 2.1));
    flowers.push({x: px, y: py, size});
  }
}
function drawFlowers(time) {
  let duskStart = 17.3, duskEnd = 18.2, dawnStart = 5.5, dawnEnd = 6.3;
  let dayCol = color(245, 235, 150, 220);
  let nightCol = color(170, 190, 130, 120);
  let fcol;
  if (time >= duskEnd && time < 24 || time >= 0 && time < dawnStart) {
    fcol = nightCol;
  } else if (time >= duskStart && time < duskEnd) {
    let t = map(time, duskStart, duskEnd, 0, 1);
    fcol = lerpColor(dayCol, nightCol, t);
  } else if (time >= dawnStart && time < dawnEnd) {
    let t = map(time, dawnStart, dawnEnd, 0, 1);
    fcol = lerpColor(nightCol, dayCol, t);
  } else {
    fcol = dayCol;
  }
  noStroke();
  for (let f of flowers) {
    fill(fcol);
    ellipse(f.x, f.y, f.size, f.size * 0.5);
  }
}

// ========== Cats ===========
function initCats() {
  cats = [];
  let numCats = floor(random(2, 5));
  for (let i = 0; i < numCats; i++) {
    let appearTime = random(0, 24);
    let relY = random(0.66, 1);
    let relX = random(0, 1);
    let x = lerp(winLeft+100, winRight-100, relX);
    let y = lerp(horizonY+30, winBottom-70, pow(relY, 1.4));
    let size = lerp(CAT_SIZE*0.5, CAT_SIZE*1.16, pow(relY, 2.1));
    cats.push({appearTime, x, y, size});
  }
}
function drawCats(time) {
  for (let c of cats) {
    let t0 = (time + 24) % 24;
    let appear = abs(t0 - c.appearTime) < 1.9;
    if (appear) {
      drawCatShape(c.x, c.y, c.size);
    }
  }
}
function drawCatShape(x, y, size) {
  push();
  translate(x, y);
  noStroke();
  fill(180,140,120, 210);
  ellipse(0, size*0.62, size*0.8, size*1.1);
  ellipse(0, 0, size*0.58, size*0.58);
  triangle(-size*0.23,-size*0.25, -size*0.08,-size*0.08, -size*0.27, size*0.05);
  triangle(size*0.23,-size*0.25, size*0.08,-size*0.08, size*0.27, size*0.05);
  fill(255,230,200, 210); ellipse(0, size*0.08, size*0.38, size*0.36);
  fill(70,50,30); ellipse(-size*0.12, size*0.03, size*0.06, size*0.13);
  ellipse(size*0.12, size*0.03, size*0.06, size*0.13);
  fill(255,140,150); ellipse(0, size*0.18, size*0.05, size*0.04);
  fill(180,140,120, 140); ellipse(size*0.28, size*0.9, size*0.33, size*0.06);
  pop();
}

// ========== Sky, including stars and sun/moon ===========
function drawSky(time) {
  let idx = 0;
  for (let i = 0; i < skyColors.length - 1; i++) {
    if (time >= skyColors[i].h && time < skyColors[i+1].h) {
      idx = i; break;
    }
  }
  let h0 = skyColors[idx].h, h1 = skyColors[idx+1].h;
  let t = map(time, h0, h1, 0, 1);

  let colTop = lerpColor(color(skyColors[idx].top), color(skyColors[idx+1].top), t);
  let colBot = lerpColor(color(skyColors[idx].bot), color(skyColors[idx+1].bot), t);

  for (let y = winTop; y < winBottom; y++) {
    let inter = map(y, winTop, winBottom, 0, 1);
    let c = lerpColor(colTop, colBot, inter);
    stroke(c);
    line(winLeft, y, winRight, y);
  }

  if(time < 6.3 || time >= 18.2){
    drawStarsWithTrail(time);
    push();
    blendMode(ADD);
    image(starTrailBuffer, winLeft, winTop);
    pop();
    drawMeteors();
  } else {
    starTrailBuffer.clear();
    meteors = [];
  }

  drawSunMoon(time);

  let cloudLevel;
  if(time >= 6 && time < 18){
    let p = abs(time - 12)/6;
    cloudLevel = lerp(0.3, 1.0, 1-p);
  }else{
    cloudLevel = 0.15;
  }
  drawClouds(time, cloudLevel);
}
function drawSunMoon(time) {
  let pathX0 = winLeft, pathY0 = winTop;
  let pathX1 = winRight, pathY1 = horizonY;
  let isSun = (time >= 6 && time < 18);
  let isMoon = (time < 6 || time >= 18);

  let tSun = map(constrain(time, 6, 18), 6, 18, 0, 1);
  let tMoon = time >= 18 ? map(time, 18, 30, 0, 1) : map(time+24, 18, 30, 0, 1);

  let sunX = lerp(pathX0, pathX1, tSun);
  let sunY = lerp(pathY0, pathY1, tSun);
  let moonX = lerp(pathX0, pathX1, tMoon);
  let moonY = lerp(pathY0, pathY1, tMoon);

  if (isSun && sunX >= winLeft && sunX <= winRight && sunY >= winTop && sunY <= horizonY) {
    drawSun(sunX, sunY, true);
  }
  if (isMoon && moonX >= winLeft && moonX <= winRight && moonY >= winTop && moonY <= horizonY) {
    drawMoon(moonX, moonY, true);
  }
}
function drawSun(x, y, underScene=true) {
  noStroke();
  fill(255, 245, 120, 218);
  ellipse(x, y, 260, 260);
  fill(255, 255, 200, 66);
  ellipse(x, y, 420, 420);
}
function drawMoon(x, y, underScene=true) {
  noStroke();
  fill(255, 255, 230, 236);
  ellipse(x, y, 170, 170);
  fill(250, 250, 255, 90);
  ellipse(x, y, 310, 310);
  fill(240, 240, 230, 60);
  ellipse(x+36, y-16, 130, 120);
}
//Refer to the following tutorials to create electronic alarm clock, https://mappa.js.org/docs/animated-meteorite-landings.html?utm_source=chatgpt.com

// ========== Window Frame ===========
function drawWindowFrame() {
  stroke(120);
  strokeWeight(VIRTUAL_W * 0.018);
  noFill();
  rect(winLeft, winTop, winRight - winLeft, winBottom - winTop, 70);
}

// ========== Analog Clock ===========
function drawClockDial(time) {
  let cx = clockCx;
  let cy = clockCy;
  let radius = clockRadius;
  let angle = map(time, 0, 24, -90, 270);
  push();
  fill(60, 60, 70, 42);
  ellipse(cx + radius*0.09, cy + radius*0.11, radius * 2.22, radius * 2.22);
  stroke(210); strokeWeight(radius * 0.11);
  fill(245, 245, 250);
  ellipse(cx, cy, radius * 2.04);

  let grad = drawingContext.createRadialGradient(cx, cy, radius*0.3, cx, cy, radius);
  grad.addColorStop(0, "#fafdff");
  grad.addColorStop(1, "#e3e6f0");
  drawingContext.fillStyle = grad;
  noStroke();
  ellipse(cx, cy, radius * 1.95);

  stroke(110);
  for (let h = 0; h < 24; h++) {
    let a = map(h, 0, 24, -90, 270);
    let len = (h%6==0) ? radius*0.21 : (h%3==0) ? radius*0.13 : radius*0.07;
    let sw = (h%6==0) ? radius*0.040 : (h%3==0) ? radius*0.028 : radius*0.014;
    strokeWeight(sw);
    let x1 = cx + cos(a) * (radius - 20);
    let y1 = cy + sin(a) * (radius - 20);
    let x2 = cx + cos(a) * (radius - 20 - len);
    let y2 = cy + sin(a) * (radius - 20 - len);
    line(x1, y1, x2, y2);
  }
  fill(80);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(radius * 0.36);
  for(let h=0; h<24; h+=6){
    let a = map(h, 0, 24, -90, 270);
    let tx = cx + cos(a) * (radius - 70);
    let ty = cy + sin(a) * (radius - 70);
    text(h, tx, ty);
  }
  stroke(180, 220, 250, 75);
  strokeWeight(radius * 0.19);
  line(cx, cy, cx + cos(angle) * (radius - 85), cy + sin(angle) * (radius - 85));
  stroke(60, 140, 230);
  strokeWeight(radius * 0.11);
  line(cx, cy, cx + cos(angle) * (radius - 70), cy + sin(angle) * (radius - 70));
  noStroke();
  fill(60, 130, 240, 220);
  ellipse(cx, cy, radius * 0.26);
  fill(250);
  ellipse(cx, cy, radius * 0.11);
  pop();
}

// ========== Digital Clock ===========
function drawDigitalClock(time) {
  let t24 = (time + 24) % 24;
  let h = floor(t24);
  let m = floor((t24 - h) * 60);
  let s = floor(((t24 - h) * 60 - m) * 60);
  let timeStr = nf(h,2) + ':' + nf(m,2) + ':' + nf(s,2);

  noStroke();
  fill(10, 20, 40, 42);
  rect(digitalX-18, digitalY-15, digitalW+36, digitalH+30, 85);
  fill(34,36,42,210);
  rect(digitalX, digitalY, digitalW, digitalH, 65);

  let gradY = digitalY + digitalH*0.23;
  for(let i=0; i<22; i++){
    let alpha = map(i,0,21,75,0);
    fill(255,255,255, alpha);
    rect(digitalX+55, gradY+i*5, digitalW-110, 5, 19);
  }

  textAlign(CENTER, CENTER);
  textFont('monospace');
  textSize(195);
  for(let i=8; i>0; i--){
    fill(255,255,255,16-(i*1.7));
    text(timeStr, digitalX+digitalW/2, digitalY+digitalH/2+6);
  }
  fill(240,242,250, 252);
  text(timeStr, digitalX+digitalW/2, digitalY+digitalH/2+6);

  fill(255,255,255, 15);
  beginShape();
  vertex(digitalX+35, digitalY+digitalH-16);
  bezierVertex(digitalX+digitalW*0.18, digitalY+digitalH-25,
               digitalX+digitalW*0.82, digitalY+digitalH-25,
               digitalX+digitalW-35, digitalY+digitalH-16);
  bezierVertex(digitalX+digitalW*0.93, digitalY+digitalH-45,
               digitalX+digitalW*0.07, digitalY+digitalH-45,
               digitalX+35, digitalY+digitalH-16);
  endShape(CLOSE);
}
//Refer to the following tutorials to create electronic alarm clock, https://www.geeksforgeeks.org/how-to-make-digital-clock-in-p5-js/?utm_source=chatgpt.com

// ========== Letterbox ===========
function drawLetterbox() {
  fill(0);
  noStroke();
  rect(0, 0, offsetX, height);
  rect(width - offsetX, 0, offsetX, height);
  rect(0, 0, width, offsetY);
  rect(0, height - offsetY, width, offsetY);
}

// ========== Interaction ===========
function isMouseInContentArea(sx, sy) {
  return (
    sx >= offsetX &&
    sx <= offsetX + VIRTUAL_W * scaleFactor &&
    sy >= offsetY &&
    sy <= offsetY + VIRTUAL_H * scaleFactor
  );
}
function isInDigitalClock(mx, my) {
  return (mx >= digitalX && mx <= digitalX+digitalW &&
          my >= digitalY && my <= digitalY+digitalH);
}
function isMouseOnClock(mx, my) {
  let cx = clockCx;
  let cy = clockCy;
  let radius = clockRadius;
  let d = dist(mx, my, cx, cy);
  return d < radius + 60 && d > radius - 120;
}
function mousePressed() {
  if (!isMouseInContentArea(mouseX, mouseY)) {
    dragging = false;
    return;
  }
  let [mx, my] = screenToVirtual(mouseX, mouseY);
  if (isMouseOnClock(mx, my)) {
    dragging = true;
    isTimeFlowing = false;
    updateTimeFromMouse(mx, my);
    return;
  } else if (isInDigitalClock(mx, my)) {
    speedIdx = (speedIdx+1)%speedFactors.length;
    isTimeFlowing = true;
    return;
  }
  for (let book of books) {
    if (isPointOnBook(mx, my, book)) {
      if (book.animDir === 0) {
        if (book.anim === 0) book.animDir = 1;
        else if (book.anim === 1) book.animDir = -1;
      }
      return;
    }
  }
  dragging = false;
}
function mouseDragged() {
  if (!dragging) return;
  if (!isMouseInContentArea(mouseX, mouseY)) return;
  let [mx, my] = screenToVirtual(mouseX, mouseY);
  updateTimeFromMouse(mx, my);
}
function mouseReleased() {
  dragging = false;
}
function updateTimeFromMouse(mx, my) {
  let cx = clockCx;
  let cy = clockCy;
  let dx = mx - cx;
  let dy = my - cy;
  let angle = atan2(dy, dx);
  let time = map(angle, -90, 270, 0, 24);
  if (time < 0) time += 24;
  if (time > 24) time -= 24;
  currentTime = constrain(time, 0, 24);
}
function screenToVirtual(sx, sy) {
  let mx = (sx - offsetX) / scaleFactor;
  let my = (sy - offsetY) / scaleFactor;
  return [mx, my];
}
function calculateViewport() {
  let scaleX = windowWidth / VIRTUAL_W;
  let scaleY = windowHeight / VIRTUAL_H;
  scaleFactor = min(scaleX, scaleY);
  offsetX = (windowWidth - VIRTUAL_W * scaleFactor) / 2;
  offsetY = (windowHeight - VIRTUAL_H * scaleFactor) / 2;
}
function keyPressed() {
  if (key === ' ' || keyCode === ESCAPE) {
    isTimeFlowing = true;
    dragging = false;
  }
}
//I admit to using ChatGPT (https://chat.openai.com/) to sample skyColors by uploading photos of myself and to assist with code development.