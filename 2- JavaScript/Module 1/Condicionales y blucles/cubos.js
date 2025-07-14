var cubes = 'ABCDEFG';
//Le damos estilo al output con CSS
for (let i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: pruple;";
    console.log("%c" + cubes[i], styles)
}