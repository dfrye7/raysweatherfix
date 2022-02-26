# Ray's Weather Logo Hotfix

[Ray's Weather](https://www.booneweather.com) (by the famous Dr. Ray Russell) might be my favorite site on the world wide web. Living in the High Country, it's one of the few websites I frequent every day to know how many "golf balls" (0 to 5) the day has in store for me and how warmly I'll need to bundle up. Unfortunately, there's one problem: the logo has been chopped in half!

![before](https://raw.githubusercontent.com/dfrye7/booneweatherfix/main/before.png)

The purpose of this repo is to offer Dr. Russell a couple of simple CSS-based solutions to reunite the halves of his logo (should he choose not to change the logo to a single file). Secondarily, this repo offers a jQuery/Tampermonkey script that the rest of us can run to resolve this issue for the time being!

Target Result:
![after](https://raw.githubusercontent.com/dfrye7/booneweatherfix/main/after.png)

## Method 1 - HTML and CSS
Using this method, the developers of booneweather.com would need to change the <img> tag that contains the logotop.png image so that it has an id, as shown in [logofix.html](https://github.com/dfrye7/booneweatherfix/blob/main/logofix.html). After that, add the simple style included in [logofix.css](https://github.com/dfrye7/booneweatherfix/blob/main/logofix.css). Viola!

## Method 2 - JavaScript/jQuery
The developers could add jQuery and add the css to the image that way, as seen in [fixbanner.js](https://github.com/dfrye7/booneweatherfix/blob/main/fixbanner.js).

## For the Rest of Us - Tampermonkey
If you want to see these results yourself, run fixbanner.js in the console on any booneweather.com page. To make this run every time you visit booneweather.com, install the Tampermonkey browser extension and import the script [BooneWeatherFix.user.js](https://github.com/dfrye7/booneweatherfix/blob/main/BooneWeatherFix.user.js)
