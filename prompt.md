I am trying to build a single page site for a Thaï Massage Spa, based on the image i've brought to you. From there we are gonna split the app into multiples components. If we talk about configuration i need to have Tailwind CSS to handle the styles, and i sended to you all the icons and images that are needed and i will mention it.

First of, the Nav component, it will contain three titles (background (solid, gradient-linear): 0% #CDBF6C, 100% #DDD087, border: #6A6025) "Massages", "Prendre RDV" centered in a button (for the button, background: #1A2F46, border (1px solid, gradient-linear): 0% #CDBF6C), and "A propos". This component will be englobed in another one and will have as sibling LandingPage.

LandingPage will have the Massage label ("le-soleil-thai-logo-sans-cercle.png") horizontally centered and taking all over about 1/2 of the height page, followed by the title and subtitles : 
- "Le Soleil Thaï" (h1, Taviraj, SemiBold, 64px, color (gradient-linear): 0% #CDBF6C, 100% #DDD087),
- "Massage et Bien-être" (h2, Taviraj, SemiBold, 40px, color (gradient-linear): 0% #CDBF6C, 100% #DDD087), 
"Technique traditionnelle fait pour votre bien-être" (h3, Gotu, Regular, 36px, #C79856), 
- Pin ("map-pin-fill.svg", 32px) + "33 Rue de Lyon, Meximieux ..." (h4, Gotu, Regular, 30px, color: #FFFFFF). It will be surrounded by flowers as decoration -one each of the diagonal angle, as in the photo.
The "frangipani-ornements.png" icon in the top-left angle a little bit rotated, such as leaves are a little up and down. 
The "orchidees-ornements.png" icon in the bottom-right angle. For both decorations, it has to be positionned in the way that it doesn't comes at contact with the others elements, but take their place as well in the layout to fill in.

The following component will be named as "BriefPresentation". It will contain (h2, Taviraj, SemiBold, #FFFFFF) "Un voyage sensoriel au coeur de la Thaïlande" (A flower image "orchidees-blanches-dorees.png" horizontally reversed, positionned at the right, approximatively at the height of title), the text description (p, Sarabun, Regular, 32px) and a container that will have 4 components named as "Slogan" which will have an icon and a title vertically aligned (Pour le texte: Golos Text, ExtraBold, 35px. "Tradition thaïlandaise": "frangipani.svg", "Bien-être et relaxation": "carry-heart.svg", "Equilibre": "leaf.svg", "Harmonie": "pierres.svg"), and spaced with each other.

And there will be a "Massages" Component that will contain all the Cards relative to massage prices and offers.
A "MainMassages" component will contain all "MassageCard" in a CSS Grid type of display, spaces handled by gap style. 
"MassageCard" is a component (background: #1A2F46, border: 2px solid #FFFFFF) that will contain two divs (it must be enough space for each div to breath, but not too much though !); 
One div within an image (border 4px solid #000000, all card images are mentionned in an ordered list, at the bottom of the file) in its top-left angle and a container whos have a title (Golos Text, ExtraBold, 30px, color (gradient-linear): 0% #CDBF6C, 100% #DDD087) and a description (Sarabun, Bold, 25px, color: #FFFFFF); 
The second will have a variant of price range depending of some variables it could be one, two or three range of price displayed. So for this component 4 props: img, title, desc, priceRange (object, example of value: {1: {hour: 60, price: 65}, 2: {hour: 90, price: 100}}). For the hour: Prompt, SemiBold, 38px, color: #FFFFFF and for the price: Prompt, SemiBold, 40px, color: #000000.

A "Option" component (background: (gradient-linear) 14% #B7A853, 100% #9E9040) will be following just after "MainMassages" sibling, it will contain props as title (Golos Text, ExtraBold, 35px, color: #000000), desc (Sarabun, Bold, 25px, color: #000000), bottomMessage (non obligatoire, Taviraj, BoldItalic, 25px, color: #000000), bottomImg ("frangipanier-trois-feuilles.png"). 

For the three last cards that will be contained in a container within our "Massages" Component, we will create a Component each, that will be named "CardOffers" (background: #090B0D, border: (gradient-linear): 0% #CDBF6C, 100% #DDD087). In the order : one on top of the two others, in this case the "Nos formules et nos forfaits" on top of "Massage en duo" in his bottom-left and "Nos soins additionnels" in his bottom-right, find a solution to make it adaptive on smaller screen i want to be able to have these three Cards in columns. "CardOffers" component will have as props: 
-title (Golos Text, ExtraBold, 35px, color (gradient-linear): 0% #CDBF6C, 100% #DDD087), 
-subtitle (Taviraj, Italic, 26px, (gradient-linear): 0% #CDBF6C, 100% #DDD087), 
-fixedHour (non obligatory) it is part of a block of two text align horizontally, the two on edge, "Selon Massage" (Sarabun, ExtraBold, 36px, color (gradient-linear): 0% #CDBF6C, 100% #DDD087) on the left and the fixed horary (props) on the right (Sarabun, Bold, 40px, color (gradient-linear): 0% #CDBF6C, 100% #DDD087), 
-children (that will be the massage in question and the price directly like, a div, that will have a <p> in Sarabun, Bold, 28px, color (gradient-linear): 0% #CDBF6C, 100% #DDD087, his margin-bottom, and a <h1> Sarabun, ExtraBold, 34px, color (gradient-linear): 0% #CDBF6C, 100% #DDD087). 
On the sides of "Nos formules et forfaits" Card, there will be a flower in the edge of each side, "formules-gauche.png" icon on the left-side, "formules-droite.png" icon on the right side.

The last element of the "Massages" Component will be a button with golden looking border (background: #FFFFFF, border: 6px solid (gradient-linear): 0% #CDBF6C, 100% #DDD087), and a "Prendre RDV" text color: #000000.

We got "Massages" Component done, let's get the last one done. 

The "About" Component will have a flower ("lotus-rose-dore.png") just following the "Prendre RDV" button, at his bottom-right.
First title (<h2>, Taviraj, SemiBold, 43px, color (gradient-linear): 0% #CDBF6C, 100% #DDD087) named "A propos" golden color, followed by two blocks of white text. A div containing subtitle "Contact :" in golden too (<h3> (gradient-linear): 0% #CDBF6C, 100% #DDD087), on the bottom 3 components named "Contact" (that is a div with icon + text aligned horizontally), that will have 2 props : img (see at the bottom of the file all icons) + text. 
Positionned at the edge right side of the page, there will be another and last flower ("frangipani-realiste.png").
Just following the above div, we will get a component that will be named "BottomTitles" that will be containing 2 component: the first one is "SocialPlatforms" (3 icons separated with a certain gap, icons listed at the end of the file), the other is "Titles" that will contain two divs (that are text spaced, horizontally), that will be displayed on the two horizontal edges of the layout. 

Let me know if you need some precisions, and I count on you to make coherent responsive also, i can give you another screen to help if needed, let's see what you got first !


Here is the ordered list of all the MassageCard images:
1. Massage Thaï : massage-1.jpeg
2. Massage Thaï aux huiles: massage-2.jpeg
3. Massage des pieds et des jambes: massage-3.jpeg
4. Massage cou, nuque et épaules : massage-4.jpeg
5. Massage du visage : massage-5.jpeg
6. Massage aux pierres chaudes : massage-6.jpeg
7. Massage Tok Sek: massage-7.png
8. Massage aux pochons d'herbes chauds: massage-8.jpeg
9. Massage femme enceinte: massage-9.png
10. Massage pour enfants: massage-10.jpeg

Here is the 3 contact icons:
1. call.svg
2. baseline-whatsapp.svg
3. outline-email.svg

Here is the 3 social platforms icons:
1. google-svgrepo-com.svg
2. facebook-svgrepo-com.svg
3. instagram-167-svgrepo-com.svg