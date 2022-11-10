# Non Decimal Number Systems

The Non Decimal Numbers Site exists to provide a simple and easy to use - and navigate - resource to learn about base number systems other than decimal. It is primarily targeted towards teens and adults, and is focused on prociding a summary of the basics behind both base number systems as a concept, and binary and hexadecimal in specific.

Given that the most important information is the summary itself, as well as the decription of how to read and understand non decimal number systems, that information is provided on the home page, alongside some interesting trivia on an unusual type of base number system, as well as buttons to navigate to the quiz and the page of sources for information.

![The Home Page](/assets/images/home_page.png)

Following this is the quiz and info pages mentioned above. All these pages are actually one page fully loaded at the start, but which is visible changes based on the buttons pressed.

## Features

0. The Header
    * This is found at the top of every page, and contains the main navigation buttons.
    * The header contains two important sections:
       - The site title, found on the top-center of the screen.
       - The navigation menu, found in the bottom-center of the header, underneath the title. The menu elements, Home, Quiz, and Info, can take the user to the pages of the same name. The page the user is on is outlined.
    * The header, as shown below, tells the user clearly both what website they are currently on, as well as how many pages there are to the site, and what they contain, making it easy for the user to navigate to the content they are after.

![The Header](/assets/images/nav_elements.png)

1. The Home Page
    * The Home page consists of the following elements - The Introsuction, The Instructions, and Trivia
        - The introduction welcomes the user to the site, and provides a basic summary of what a non decimal number system is, while also reminding the user that such a number system can be useful to know depending on their field. A button is located underneath to guide the user to the Info Page if they wish to learn more.
        - The instructions teach the user how to read and understand all base number systems, with specific notice brought to binary and hexadecimal numbers, the ones the user will be quized on. A button is located underneath to guide the user to the Quiz Page if they wish to test themselves.
        - The trivia section, while less important, helps the suer understand how complex base number systems can get as they move further from the traditional decimal number system, whilst still holding to the underlying framework of all such systems.
    * Therefore, the Home Page clearly lays out the information the user is most immediately in need of, whilst making clear where to go to learn more and to test their understanding.

    ![The Home Page](/assets/images/home_page.png)

    2. The Quiz Page
    * The Quiz page consists of the following elements - The Quiz and The Score
        - The quiz is a test to check their understanding of binary and hexadecimal number systems, two of the most prominent non decimal number systems. Feedback is provided to the user on how they did with each question after answering them.
        - The score is an indicator of how well the user is doing that updates as they progress through the quiz.
        The list of sources here serves the same purpose as that of the Home page, focusing more on the before and after of the battle, and less on the conflict itself, and the men who lead each side.
    * To avoid problems with the quiz, the input element is validated before the user's answers are submitted, requiring the following:
        - Something must be enterred into the space.
        - No more than 6 characteres can be enterred into the space.
        - Only valid characters can be enterred into the space.
    * If any of the above criteria are not met, the answer is not submitted, allowing the user to correctly input a valid answer instead.

![The Validity Alert](/assets/images/validation_alert.png)

![The Quiz Page](/assets/images/quiz_page.png)

3. The Info Page
    * The Info page simply consists of one element - The List of Sources
        - The list is divided into three sections: Binary, Hexadecimal, and Negative base numbers.
        - Each section contains at least one source of information on non decimal number systems, providing a variety of sources for the user to use to further investigate the subject in their personal areas of interest.
    * Therefore, the Info page provides an easily read and used resource for users seeking to get acquire more detailed information on the overall topic.

![The Info Page](/assets/images/info_page.png)

4. The Footer
    * The footer is found constantly at the bottom of the screen, regardless of where the user is on the page.
        - This ensures the resources it provides are constantly available to the user, no matter how far into a page they might be.
    * In the center of the footer is the organisations social links, specifically to its Facebook, Twitter, and Youtube pages, providing immediate and easy access to its avenues for news and updates, as well as bonus materials.
    * Therefore, the footer provides easy access to additional media venues for the organisation that owns the website.

![The Footer](/assets/images/footer_socials.png)

## Testing

* The site has been tested on both Chrome and Edge browsers.
* I have confirmed that the project is fully responsive, looks functional, and functions on multiple screen sizes via the devtools.
* I have confirmed the various navigation tools, found throughout the site, are fully functional, and are all easy to read and understand
* I have confirmed the quiz seems to work, as does the validation system, and have not identified any major issues with it.

### Bugs

* I found multiple bugs while testing this project, however most were relatively minor cases of typos and such matters, and were easily fixed.
* I did have a problem getting the javascript to work at first, but it was swiftly found to be that I hadn't linked it properly, and have had no issues with javascript since then..

### Validator

* HTML
    - No errors occured when run through the W3 validator.
* CSS
    - No errors occured when run through the Jigsaw validator.
* Javascript
    - No errors occured when run through the JSHint validator.

### Unfixed Bugs

There is an unresolved issue where the only way to refresh the quiz is to refresh the page. This is a holdover from when a different system was in place, but I did not have time to correct it after removing the other system, as I didn't have time to finish said system.

## Deployment

* The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here:

## Credits

### Content
The code to make the social media links as well as several parts of the css were taken from the previus Portfolio Project. I also made use of the Code Institute Gitpod Template.