document.addEventListener("DOMContentLoaded", () => {
  // MENU

  if (document.body.classList.contains("page-menu")) {
    const topics = document.querySelectorAll(".topic");

    topics.forEach((topic) => {
      topic.addEventListener("click", () => {
        const topicId = topic.id;
        window.location.href = `./scripture.html?topic=${topicId}`;
      });
    });

    // grab the topics
    // foreach the topics
    // add eventlistenr for a click
    // when click happens, grab the topic id
    // assign the topic id to the windows thing
  }

  // SCRIPTURE
  if (document.body.classList.contains("page-scripture")) {
    // Search after the ? in the url
    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic");

    const scriptureTitle = document.getElementById("scripture-title");
    scriptureTitle.textContent = topic;

    // GETTING SCRIPTURES ON PAGE

    const verse = document.getElementById("scripture-verse");
    const ref = document.getElementById("scripture-ref");

    function getScripture(topic) {
      const randomNumber = Math.floor(Math.random() * 3);
      const scriptureFind = scriptures.find((i) => i.topic === topic);
      verse.textContent = scriptureFind.verses[randomNumber].verse;
      ref.textContent = scriptureFind.verses[randomNumber].ref;
    }

    const btnMore = document.getElementById("btn-more");

    btnMore.addEventListener("click", () => {
      getScripture(topic);
    });
  }

  // SCRIPTURES BEFORE API

  const scriptures = [
    {
      topic: "anxiety",
      verses: [
        {
          verse:
            "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God.",
          ref: "Philippians 4:6",
        },
        {
          verse: "Cast all your anxiety on Him because He cares for you.",
          ref: "1 Peter 5:7",
        },
        {
          verse:
            "An anxious heart weighs a man down, but a kind word cheers him up.",
          ref: "Proverbs 12:25",
        },
      ],
    },
    {
      topic: "joy",
      verses: [
        {
          verse:
            "You shall go out with joy and be led forth with peace; the mountains and hills with break forth before you into singing, and all the trees of the fields shall clap their hands.",
          ref: "Isaiah 55:12",
        },
        {
          verse: "...Do not grieve, for the joy of the Lord is your strength.",
          ref: "Nehemiah 8:10",
        },
        {
          verse:
            "Your statutes are my heritage forever; they are the joy of my heart.",
          ref: "Psalm 119:111",
        },
      ],
    },
    {
      topic: "love",
      verses: [
        {
          verse:
            "In all their distress He too was distressed, and the angel of His presence saved them. In His love and mercy He redeemed them; He lifted them up and carried them all the days of old.",
          ref: "Isaiah 63:9",
        },
        {
          verse:
            "How great is the love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him.",
          ref: "1 John 3:1",
        },
        {
          verse:
            "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
          ref: "1 John 4:18",
        },
      ],
    },
    {
      topic: "peace",
      verses: [
        {
          verse: "For He Himself is our peace...",
          ref: "Ephesians 2:14",
        },
        {
          verse:
            "And the peace of God, which transcends all understanding, will guard you hearts and your minds in Christ Jesus.",
          ref: "Philippians 4:7",
        },
        {
          verse:
            "You will keep in perfect peace him whose mind is steadfast, because he trusts in You.",
          ref: "Isaiah 26:3",
        },
      ],
    },
    {
      topic: "strength",
      verses: [
        {
          verse:
            "The Lord is the strength of his people, a fortress of salvation for His anointed one.",
          ref: "Psalm 28:8",
        },
        {
          verse:
            "God is our refuge and strength, an ever-present help in trouble.",
          ref: "Psalm 46:1",
        },
        {
          verse:
            "It is God who arms me with strength and makes my way perfect.",
          ref: "2 Samuel 22:33",
        },
      ],
    },
    {
      topic: "stronghold",
      verses: [
        {
          verse:
            "The Lord is good, a stronghold in the day of trouble; and he knows them that trust Him",
          ref: "Nahum 1:7",
        },
        {
          verse:
            "The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds. We demolish arguments and every pretension that sets itself up against the knowledge of God, and we lead every thought and purpose away captive into the obedience of Christ.",
          ref: "2 Corinthians 10:4-5",
        },
        {
          verse:
            "The Lord also will be a refuge (stronghold) for the oppressed, a refuge in times of trouble.",
          ref: "Psalm 9:9",
        },
      ],
    },
  ];
});
