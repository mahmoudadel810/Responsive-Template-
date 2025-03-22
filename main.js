let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mount3 = document.getElementById('mount3');
let mount4 = document.getElementById('mount4');
let nile = document.getElementById('nile');
let boat = document.getElementById('boat');
let dola = document.querySelector('.dola')


window.onscroll = function ()
{
    let value = scrollY;
    console.log(value);

    stars.style.left = value + 'px'; // moving the stars to the left
    
    moon.style.top = value * 4 + 'px'; // moving the moon to the bottom

    mount3.style.top = value * 2 + 'px'; // moving the mount3 to the bottom

    mount4.style.top = value * 1.5 + 'px'; // moving the mount4 to the bottm
    
    nile.style.top = value + 'px'; // moving the nile to the bottom
    boat.style.top = value + 'px'; // moving the boat to the bottom
    boat.style.left = value * 3 + 'px'; //  moving theboat to the bottom 

    dola.style.fontSize = value + 'px'; 

    if (scrollY >= 67)
    {
        dola.style.fontSize = 67 + 'px';
        dola.style.position = 'fixed'
    }
    if (scrollY >= 478)
    {
        dola.style.display = 'none' 
    }
    else
    {
        dola.style.display = 'block';
    }
    if (scrollY >= 127)
    {
        document.querySelector('.main').style.background = 'linear-gradient( #376281 , #10001f)';
    }
    else
    {
        document.querySelector('.main').style.background = 'linear-gradient( #200016 , #10001f)';

    }
    
}


