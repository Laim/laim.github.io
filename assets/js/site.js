  // Set emoji's in introduction header
  
  if(document.getElementById('emoji'))
  {
    const emojis = ["🫶","👋","😀", "🙏", "🖥️", "🎮", "ヾ(•ω•`)o"];
    const emojiAlt = [
      "love heart hands",
      "waving hand",
      "big grin face",
      "folding hands/prayer hands",
      "computer monitor",
      "video game controller",
      "ヾ(•ω•`)o"
    ]

    const randomNumber = Math.floor(Math.random() * emojis.length);

    document.getElementById('emoji').innerText = emojis[randomNumber];
    document.getElementById('emoji').title = emojiAlt[randomNumber];
  }

  // Footer dates
  function romanize (num) {
    if (isNaN(num))
    {
      return NaN;
    }
  
      var digits = String(+num).split("")

      key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"
            ]
      
      roman = "",
              
      i = 3;
              
      while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
              
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  document.getElementById('current-year').innerText = romanize(new Date().getFullYear());
  document.getElementById('current-year').title = new Date().getFullYear();

  document.getElementById('start-year').innerText = romanize(2020);
  document.getElementById('start-year').title = 2020;