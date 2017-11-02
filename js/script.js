function Recipe(name, preparationTime, difficulty, instructions, ingredients, img) {
    this.name = name;
    this.preparationTime = preparationTime;
    this.difficulty = difficulty;
    this.instructions = instructions;
    this.ingredients = ingredients;
    this.img = img;
}

var recipesArr = [
    new Recipe('מוקפץ סיני עם ירקות נודלס ורצועות עוף של אתוש',
        '45',
        'קל',
               ['להשרות את חזה העוף בכף דבש, שום כתוש וסויה למשך חצי שעה.',
            'לטגן את רצועות העוף, ללא הנוזלים, עד קבלת צבע שחום יפה ולהוציא לצלחת.',
            'לטגן גזר עד להתרככות.',
            'להוסיף את הפלפלים ולטגן מספר דקות.',
            'להוסיף את הכרוב ולטגן מספר דקות.',
            'להוסיף את הנבטים ולטגן מספר דקות.',
            'להוסיף את הפטריות ולטגן מספר דקות.',
            'להוסיף את הנודלס ולהמשיך להקפיץ.',
            'להוסיף דבש, תבלינים, רוטב צ\'ילי מתוק ואת חזה העוף ולהמשיך להקפיץ על אש נמוכה עוד כמה דקות וליהנות.'
        ], [
            '1 חבילה אטריות נודלס סיני מוכנות ומסוננות',
            '1 חזה עוף חתוך לרצועות',
            '3 בצלים חצויים ופרוסים',
            '2 שיני שום פרוסות',
            '1 חבילה פטריות שמפיניון פרוסות',
            '3 גזרים חתוכים למקלות',
            '1 פלפל אדום פרוס לרצועות',
            '1 פלפל כתום פרוס לרצועות',
            '1 פלפל צהוב פרוס לרצועות',
            '1 כרוב חתוך לרצועות',
            '1 כוס נבטים',
            '2 כפות דבש',
            '3 כפות רוטב סויה',
            '3 כפות רוטב צילי מתוק',
            'מעט מלח ',
            'מעט פלפל שחור',
            '1 כפית שום כתוש'
        ], 'mukpatz.jpg'
    ),
new Recipe('מוקפץ מפנק של אטריות, ירקות ורצועות עוף בשומשום',
        '30',
        'קל', ['מחממים שמן בווק ומקפיצים את כל הירקות. תוך כדי ההקפצה מוסיפים את מרכיבי הרוטב',
            'חותכים את חזה העוף לרצועות וטובלים בביצה טרופה עם הטריאקי. מגלגלים את הנתחים בשומשום ומטגנים במעט שמן מכל הצדדים. לקראת סיום הטיגון מוסיפים רוטב סויה וממשיכים לטגן עוד 2 דקות.',
            'מכניסים את האטריות לירקות המוקפצים ומערבבים אותן פנימה.',
            'מוסיפים את רצועות העוף המטוגנות לתוך המוקפץ.'
        ], ['למוקפץ הירקות:',
            '2 בצלים סגולים פרוסים לרצועות',
            '1 פלפל אדום פרוס לרצועות',
            '1 סלסילת פטריות שמפיניון פרוסות לרצועות',
            '1 סלסילת נבטים עבים',
            '1 קישוא פרוס לרצועות',
            '1/2 כרובית מפורקת לפרחים קטנים',
            'אטריות נודלס אסם מבושלות לפי ההוראות בגב האריזה',
            '',
            'לרוטב',
            '4 כפות רוטב סויה אסם  ',
            '2 כפות שמן שומשום',
            '1כף אבקת מרק עוף אסם ',
            '',
            'לעוף בשומשום',
            '1/2 קילו חזה עוף פרוס לרצועות',
            '1 ביצה טרופה',
            '1 כף רוטב טריאקי אסם',
            'שומשום',
            '1 כף רוטב סויה אסם', ],
        'muk_0.jpg'

    ),
new Recipe('כרעי עוף ברוטב פלפלים קלויים',
        '1:20',
        'קל', ['מחממים תנור לחום של 200 מעלות',
            'מערבבים בקערה את הפפריקה, חרדל, אבקת שום, מלח, פלפל, סילאן ושמן זית לתערובת. מתקבלת תערובת יחסית סמיכה ולא נוזלית, אם יש צורך מוסיפים עוד מעט שמן.',
            'מעסים היטב את כל נתחי העוף בתערובת מכל הצדדים.',
            'בתבנית מרופדת בנייר אפייה שמים חצי מכמות סלט הפלפלים הקלויים.',
            'מעל הפלפלים מניחים את חלקי העוף עם העור כלפי מטה ומוסיפים את יתרת הסלט מעל נתחי העוף. אופים כחצי שעה.',
            'הופכים בזהירות את נתחי העוף ומוזגים מנוזלים שהצטברו בתחתית התבנית על העוף.',
            'מנמיכים את התנור לחום של 180 מעלות ואופים עוד 30-40 דקות עד שהעוף עשוי ורך (בודקים עם מזלג את מידת עשייה).',
            'מומלץ להגיש מעל אורז לבן לספיגת טעמי הרוטב שהצטברו בתבנית.'], ['4 כרעי עוף עם העור, מחולקות',
        '1 סלט "פלפלים קלויים" מסדרת סלטי השף של רפי כהן',
        '1 כף פפריקה מתוקה',
        '1 כף חרדל דיז\'ון עם גרגירים',
        '2 כפיות אבקת שום',
        'מלח ופלפל לפי הטעם',
        '1 כף סילאן',
        '2 כפות שמן זית'],
        'עוף בפלפלים.jpg'

    ),

    new Recipe(
        'חגיגה צבעונית של אנטיפסטי',
        '1:00',
        'קל', ['מחממים תנור לחום של 200 מעלות',
    'מערבבים בעדינות את הירקות עם השמן והתבלינים ומסדרים אותם בקבוצות בתבנית.',
    'אופים כ – 40 דקות עד שהירקות מזהיבים.'], ['ירקות:',
    '1 חבילת פלפלונים צבעוניים',
    '1 חבילת אספרגוס טרי',
    '1 קלח תירס פרוס לטבעות',
    '1 פרוסת דלעת פרוסה לרצועות',
    '1 דלעת ערמונים פרוסה לרצועות',
    '1 סלק פרוס לרבעים',
    '2 ראשי שום פרוסים לחצי',
    '1 שומר פרוס לרוחב',
    '',
    'לתיבול:',
    '4 כפות שמן זית',
    '1 כף תערובת תבלינים טריים שאוהבים – תימין, רוזמרין, אורגנו ועוד',
    '1/4 כפית מלח ים אטלנטי',
    'מעט פלפל שחור גרוס עבה',
    '1 כף אבקת מרק בצל אסם',
    '',
    'ציוד נדרש:',
    'תבנית הגשה מלבנית'],
        'anti.jpg'),

    new Recipe(
        'סלט מרענן עם בטטה מקורמלת',
        '30',
        'קל', ['פורסים את הבטטה לקוביות קטנות',
    'מזלפים עליהן שמן זית ומלח, פלפל ואופים בתנור על חום של 200 מעלות כ – 15 דקות.',
    'מחממים במחבת את הרוטב בסיס עד צמצום ומוסיפים את הבטטות, מערבבים דקה עד קרמול.',
    'פורסים את הכרוב לרצועות ואת הבצל הירוק והצ\'ילי לטבעות ומניחים בקערה עם הקשיו והעלים הירוקים. ',
    'בצנצנת קטנה מערבבים את כל מרכיבי הרוטב.',
    'מתבלים ומערבבים.',
    'מוסיפים את קוביות הבטטה המקורמלות.'], ['סלט:',
    '1/4 כרוב סגול',
    '4 יחידות בצל ירוק',
    '1 פלפל צ\'ילי אדום',
    '1/2 כוס אגוזי קשיו קלויים',
    '2 כוסות אורוגולה (רוקט) או עלי תרד בייבי',
    '2 בטטות',
    'מלח ופלפל',
    '1/3  כוס רוטב בסיס',
    '',
    'תיבול:',
    '2 כפות שמן זית',
    '1 כף חומץ בלסמי',
    'מיץ מחצי לימון',
    'מלח ופלפל',
    '1 כף חרדל',
    '1 כף סילאן'],
        'batatasalad.jpg'),

    new Recipe(
        'שקשוקה פרפקטו ובולגרית',
        '20',
        'קל', ['יוצקים למחבת את הרוטב ומביאים לרתיחה',
    'מוסיפים את הביצים לרוטב.',
    'מכסים עם מכסה ומבשלים על אש נמוכה כ-7 דקות.',
    'מתבלים במלח ופלפל לפי הטעם.',
    'בסיום, מפוררים גבינה בולגרית מעל השקשוקה ומכסים לעוד דקה עד שהגבינה רכה.'], ['1 צנצנת רוטב עגבניות ופלפלים מסדרת אסם פרפקטו',
    '4 ביצים',
    'מעט מלח ופלפל שחור',
    '1 פרוסה גבינה בולגרית לקישוט (לא חובה)'],
        'E54B2776-4488-4760-BB4E-C821A1CDB98B_2.jpg'),

    new Recipe('סלט שומר ותותים',
        '15',
        'קל', ['חותכים את כל הירקות והתותים לרצועות צרות וארוכות ומניחים בקערה',
    'שמים את כל מרכיבי הרוטב - לימון, דבש, שמן שומשום, שום, מלח וצ\'ילי בצנצנת קטנה, סוגרים אותה ומנערים היטב לכדי מרקם אחיד.',
    'שופכים את הרוטב על הסלט, מערבבים, מפזרים את האגוזים ומגישים.'], ['2 שומר',
    '1 קולורבי',
    '1 חבילת תותים',
    'חצי כוס פטרוזיליה קצוצה',
    'חצי כוס נענע קצוצה',
    'חופן אגוזי מלך קצוצים',
    'לימון שלם סחוט',
    'כפית שמן שומשום',
    'כף וחצי דבש',
    'שן שום כתושה',
    'מלח לפי הטעם',
    'כפית גדושה פלפל צ\'ילי אדום טרי קצוץ'],
        'סלט תותים.jpg'),

    new Recipe(
        'סלט סלק ואננס צלויים, עם גבינת חלומי בוויניגרט מרענן',
        '45',
        'קל', ['מחממים תנור ל-200 מעלות',
    'מניחים בתבנית תנור על גבי נייר אפיה חופן מלח גס, ומעליו את הסלקים. צולים כחצי שעה בתנור עד לריכוך. מצננים ופורסים לשמיניות.',
    'בתבנית תנור נפרדת מניחים קוביות אננס וצולים עד התקרמלות כ-10 דקות. מצננים.',
    'מחממים מחבת טפלון ללא שומן וקולים את האגוזים עד קבלת פריכות.',
    'מחממים במחבת 2-3 כפות שמן זית, וצורבים את קוביות גבינת החלומי עד הזהבה.',
    'להכנת הרוטב: מערבבים יחד בצנצנת את רוטב השף, שמן הזית וקוביות ארטיק אננס/כף מיץ מקופסת שימורים עד לקבלת מרקם אחיד.',
    'בקערה גדולה מניחים רוקט, מפזרים מעליו את האננס, הצנוניות והאגוזים ויוצקים כמעט את כל הוויניגרט.',
    'מערבבים ומעבירים לקערת הגשה. מסדרים בצורה יפה את קוביות הגבינה ואת הסלקים ויוצקים את שארית הוויניגרט. מגישים מיד.'], ['2 סלקים בינוניים שלמים',
    '1 אננס חתוך לקוביות, או אננס מקופסת שימורים',
    '2 צנוניות פרוסות דק לחצאי עיגולים',
    '1 צרור עלי רוקט שטופים ויבשים',
    '200 גרם גבינת חלומי חתוכה לקוביות',
    '100 גרם אגוזי מלך טבעיים',
    '1/2 כוס רוטב השף של אסם',
    '1/4 כוס שמן זית מעודן או שמן חמניות',
    '2 יחידות קרטיב קרח בטעם אננס חתוך לקוביות (או כף מיץ מקוספת השימורים של האננס)',
        '',
        'רצוי להכין את גבינת החלומי רגע לפני ההגשה על מנת שתישאר פריכה וחמימה.'],
        '2D29E9D2-CFBC-4F3C-A646-07E7709BF4D7_2.jpg'),

    new Recipe(
        'סלט טבולה פתיתים קליל',
        '30',
        'קל', ['מבשלים את הפתיתים עד ריכוך במים. מסננים ומצננים אותם',
    'קוצצים את כל הירוקים ומניחים בקערה, מוסיפים את הפתיתים, החמוציות והשקדים.',
    'מוסיפים מלח, שמן ולימון ומערבבים היטב.'], ['סלט:',
    '1/2 חבילת פתיתים',
    '1 צרור פטרוזיליה',
    '1 צרור נענע',
    '1 צרור כוסברה',
    '3 גבעולי סלרי',
    '1/2 כוס חמוציות מיובשות',
    '1 חופן שקדים מולבנים (מושחמים במחבת)',
    '',
    'רוטב:',
    'מיץ מחצי לימון',
    'שמן זית לפי הטעם',
    'מלח'],
        'tabule.jpg'),

    new Recipe(
        'סלט אוצרות מפטריות טריות',
        '20',
        'קל',
        ['פורסים את הפטריות לרבעים, למעט השימג\'י (משאירים אותן שלמות).',
    'מחממים שמן במחבת גדולה.',
    'מוסיפים את הפטריות, שום, רוטב בסיס ומלח.',
    'מערבבים עם כף עץ ומקפיצים כמה דקות.',
    'מוסיפים את אפונת השלג והצ\'ילי וממשיכים להקפיץ עוד כמה דקות.',
    'ניתן להגיש חם או להעביר לקופסה, לכסות ולצנן במקרר.',
    'לפני ההגשה מפזרים מעל הפטריות בצל ירוק או עירית קצוצה.',
    'הסלט נשמר עד 3 ימים במקרר.'], ['1 סלסלת פטריות שמפיניון',
    '1 סלסלת פטריות פורטבלו',
    '1 סלסלת פטריות יער – ירדן',
    '1 סלסלת פטריות שימג\'י',
    '1 סלסלת אפונת שלג',
    '2 שיני שום קצוצות לקוביות קטנות',
    '6 כפות רוטב בסיס אסם',
    '2 כפות שמן',
    'מלח לפי הטעם',
    '1 פלפל צ\'ילי אדום טרי פרוס לטבעות',
    'להגשה - בצל ירוק או עירית טרייה קצוצה דק'],
        'pitriyot.jpg')

]


console.log('hi :)');

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function addoverflowIndication(element) {
    var recipeTitles = document.getElementsByClassName('titleContainer');
    for (let i = 0; i < recipeTitles.length; i++) {
        recipeTitles[i].getElementsByTagName('span')[0].innerHTML = "...";
    }
}





(function addRandomRecipes() {
    let container = document.getElementById('randomRecipesContainer');
    let usedIndex = [];

    for (let i = 0; i < 3; i++) {

        var randomIndex = Math.floor(Math.random() * recipesArr.length);
        if (usedIndex.indexOf(randomIndex) != -1) {
            i--;

        } else {

            usedIndex.push(randomIndex);

            let recipeContainer = document.createElement('div');
            recipeContainer.classList.add('recipe');
            recipeContainer.appendChild(createRecipeTitleNode(recipesArr[randomIndex].name));

            recipeContainer.appendChild(createImageRecipeNode(recipesArr[randomIndex].img));
            recipeContainer.appendChild(createRecipeDeatailsNode(recipesArr[randomIndex].difficulty, recipesArr[randomIndex].preparationTime));
            recipeContainer.appendChild(createRecipeIngredientsNode(recipesArr[randomIndex].ingredients));
            recipeContainer.appendChild(createRecipeInstructionsNode(recipesArr[randomIndex].instructions));
            container.appendChild(recipeContainer);
        }
    }
})();



function createRecipeTitleNode(title) {
    let titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    let h1 = document.createElement('h1');
    h1.classList.add('recipeTitle');
    h1.innerHTML = title;
    titleContainer.appendChild(h1);
    return titleContainer;
}

function createImageRecipeNode(src) {
    let img = document.createElement('img');
    img.classList.add('imgRecipe');
    img.setAttribute('src', 'images\/' + src);
    return img;
}

function createRecipeDeatailsNode(level, time) {
    let deatailsContainer = document.createElement('div');
    deatailsContainer.classList.add('deatailsContainer');
    deatailsContainer.appendChild(createRecipeLevelNode(level));
    deatailsContainer.appendChild(createRecipeTimeNode(time));
    return deatailsContainer;

}

function createRecipeLevelNode(level) {
    
    let levelDiv = document.createElement('div');
    levelDiv.classList.add('deatails-label');
    if (level == 'בינוי') {
        levelDiv.classList.add('difficulty-level-med');
    } else if (level == 'קשה') {
        levelDiv.classList.add('difficulty-level-hard');
    }
    else  {
        levelDiv.classList.add('difficulty-level-easy');
    } 

    let span = document.createElement('span');
    span.innerHTML = level;
    levelDiv.appendChild(span);
    return levelDiv;
}


function createRecipeTimeNode(time) {
    let timeDiv = document.createElement('div');
    timeDiv.classList.add('deatails-label', 'time-icon');
    let span = document.createElement('span');
    span.classList.add('timePreperaion');
    span.innerHTML = time;
    if (time.indexOf(':') != -1) {
        span.innerHTML += ' שעות';
    } else {
        span.innerHTML += ' דקות';
    }
    timeDiv.appendChild(span);
    return timeDiv;
}

function createRecipeIngredientsNode_old(ingredientsArr) {

    let ul = document.createElement('ul');
    ul.classList.add('ingredients');

    for (let i = 0; i < ingredientsArr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = ingredientsArr[i];
        ul.appendChild(li);
    }
    return ul;
}

function createRecipeIngredientsList(ingredientsArr)
{
     let ul = document.createElement('ul');
    ul.classList.add('ingredients');

    for (let i = 0; i < ingredientsArr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = ingredientsArr[i];
        ul.appendChild(li);
    }
    return ul;
}

function createRecipeIngredientsNode(ingredientsArr) {

   let ingredientsContainer = document.createElement('div');
    ingredientsContainer.classList.add('ingredientsContainer');
    
    let h2 = document.createElement('h2');
    h2.innerHTML='מצרכים:';
    h2.classList.add('deatailsTitle');
    
    ingredientsContainer.appendChild(h2);
    
    var scrollBar = createScrollBarNode(createRecipeInstructionsList(ingredientsArr));
    
    ingredientsContainer.appendChild(scrollBar);
    
    return ingredientsContainer;   
}



function createRecipeInstructionsNode(instructionsArr) {

  let instrutionsContainer = document.createElement('div');
    instrutionsContainer.classList.add('instrutionsContainer');
    
    let h2 = document.createElement('h2');
    h2.innerHTML = 'הוראות הכנה:';
    h2.classList.add('deatailsTitle');
    
    instrutionsContainer.appendChild(h2);
    
    var scrollBar = createScrollBarNode(createRecipeInstructionsList(instructionsArr));
    
    instrutionsContainer.appendChild(scrollBar);
    
    return instrutionsContainer;   
    
}


function createRecipeInstructionsList(instructionsArr)
{
      let instrutionsContainer = document.createElement('div');
    instrutionsContainer.classList.add('instrutionsContainer');

    for (let i = 0; i < instructionsArr.length; i++) {
        let p = document.createElement('p');
        p.classList.add('instructions');
        p.innerHTML = instructionsArr[i];

        instrutionsContainer.appendChild(p);
    }

    return instrutionsContainer;
}

function createScrollBarNode(element) {
    let scrollbar = document.createElement('div');
    scrollbar.classList.add('scrollbar');

    let div = document.createElement('div');
    div.classList.add('force-overflow');

    div.appendChild(element);

    scrollbar.appendChild(div);

    return scrollbar;

}


function createRecipeInstructionsNode_old(instructionsArr) {

    let instrutionsContainer = document.createElement('div');
    instrutionsContainer.classList.add('instrutionsContainer');

    for (let i = 0; i < instructionsArr.length; i++) {
        let p = document.createElement('p');
        p.classList.add('instructions');
        p.innerHTML = instructionsArr[i];

        instrutionsContainer.appendChild(p);
    }

    return instrutionsContainer;
}
