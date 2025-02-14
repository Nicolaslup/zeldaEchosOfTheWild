const sand = {
    sprite: 'sprite/sand.jpg',
    walk: true
}

const tree = {
    sprite: 'sprite/tree.png',
    walk: false
}

const water = {
    sprite: 'sprite/water.jpg',
    walk: false
}

const link = {
    x: 0,
    y: 0,
    direction: 'top',
    sprite: 'sprite/linktopA.png'
}

let linkElement;
let height;
let directionOrigin = 'top'

const createLink = (size, sprite) => {
    const element = document.createElement('div');
    element.style.backgroundImage = `url(${sprite})`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
    element.style.height = `${size / 24}px`;
    element.style.width = `${size / 24}px`;
    element.style.position = 'absolute';
    element.style.top = 0;
    element.style.left = 0;
    return element
}

const createCase = (backgroundimg, i, j) => {
    const element = document.createElement('div');
    element.style.backgroundImage = `url(${backgroundimg})`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
    element.style.height = `${height / 24}px`
    element.style.width = `${height / 24}px`;
    element.style.position = 'relative'
    element.id = `x${j}-y${i}`;
    return element;
}

const deplacement = (direction, origin) => {
    arrive = origin;
    if (direction === 'top') {
        arrive.y -= 1;
    } else if (direction === 'right') {
        arrive.x += 1;
    } else if (direction === 'left') {
        arrive.x -= 1;
    } else {
        arrive.y += 1;
    }

    const deplacementAuthorise = scene[arrive.y][arrive.x].walk;
    if (deplacementAuthorise) {
        if (directionOrigin === direction) {
            if (direction === 'top') {
                if (link.sprite === 'sprite/linktopA.png') {
                    link.sprite = 'sprite/linktopB.png'
                } else if (link.sprite === 'sprite/linktopB.png') {
                    link.sprite = 'sprite/linktopA.png'
                }
            } else if (direction === 'left') {
                if (link.sprite === 'sprite/linkLeftA.png') {
                    link.sprite = 'sprite/linkLeftB.png'
                } else if (link.sprite === 'sprite/linkLeftB.png') {
                    link.sprite = 'sprite/linkLeftA.png'
                }
            } else if (direction === 'right') {
                if (link.sprite === 'sprite/linkRightA.png') {
                    link.sprite = 'sprite/linkRightB.png'
                } else if (link.sprite === 'sprite/linkRightB.png') {
                    link.sprite = 'sprite/linkRightA.png'
                }
            } else {
                if (link.sprite === 'sprite/linkBottomA.png') {
                    link.sprite = 'sprite/linkBottomB.png'
                } else if (link.sprite === 'sprite/linkBottomB.png') {
                    link.sprite = 'sprite/linkBottomA.png'
                }
            }

            link.x = arrive.x
            link.y = arrive.y
        } else {
            directionOrigin = direction
            if (direction === 'top') {
                link.sprite = 'sprite/linktopA.png'
            } else if (direction === 'left'){
                link.sprite = 'sprite/linkLeftA.png'            
            } else if (direction === 'right') {
                link.sprite = 'sprite/linkRightA.png'
            } else {
                link.sprite = 'sprite/linkBottomA.png'
            }
        }

        parentDepart.removeChild(linkElement);
        linkElement = createLink(height, link.sprite);
        parentDepart = document.getElementById(`x${link.x}-y${link.y}`);
        parentDepart.appendChild(linkElement);
    }
}

const scene = [
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [sand,sand,sand,sand,sand,sand,sand,sand,water,water,water,sand,sand,water,water,water,sand,sand,sand,sand,sand,sand,sand,sand],
    [sand,sand,sand,sand,sand,sand,sand,sand,water,water,water,sand,sand,water,water,water,sand,sand,sand,sand,sand,sand,sand,sand],
    [sand,sand,sand,sand,sand,sand,sand,sand,water,water,water,sand,sand,water,water,water,sand,sand,sand,sand,sand,sand,sand,sand],
    [sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand],
    [sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand,sand],
    [sand,sand,sand,sand,sand,sand,sand,sand,water,water,water,sand,sand,water,water,water,sand,sand,sand,sand,sand,sand,sand,sand],
    [sand,sand,sand,sand,sand,sand,sand,sand,water,water,water,sand,sand,water,water,water,sand,sand,sand,sand,sand,sand,sand,sand],
    [sand,sand,sand,sand,sand,sand,sand,sand,water,water,water,sand,sand,water,water,water,sand,sand,sand,sand,sand,sand,sand,sand],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    [tree,tree,tree,tree,tree,tree,tree,tree,sand,sand,sand,sand,sand,sand,sand,sand,tree,tree,tree,tree,tree,tree,tree,tree],
    
]

const sceneHtml = document.getElementById('scene');
height = window.innerHeight;
const width = height;
sceneHtml.style.height = `${height}px`
sceneHtml.style.width = `${height}px`
linkElement = createLink(height, link.sprite)

for (let i = 0; i < scene.length; i++) {
    for (let j = 0; j < scene[i].length; j++) {
        const element = createCase(scene[i][j].sprite, i, j);
        sceneHtml.appendChild(element)
    }
}

let parentDepart = document.getElementById('x12-y21');
link.x = 12;
link.y = 21;
link.direction = 'top';
link.sprite = 'sprite/linktopA.png';
parentDepart.appendChild(linkElement);
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        deplacement('bottom', {x: link.x, y: link.y})
    } else if (event.key === 'ArrowLeft') {
        deplacement('left', {x: link.x, y: link.y})
    } else if (event.key === 'ArrowRight') {
        deplacement('right', {x: link.x, y: link.y})
    } else {
        deplacement('top', {x: link.x, y: link.y})
    }
})



