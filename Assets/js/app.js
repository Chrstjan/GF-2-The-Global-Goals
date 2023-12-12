const imagesArray = ['Goal-No-Poverty.png', 'Goal-No-Hunger.png', 'Goal-Good-Health.png', 'Goal-Good-Education.png', 'Goal-Gender-Equality.png', 'Goal-Clean-Water.png', 'Goal-Clean-Energy.png', 'Goal-Decent-Work.png', 'Goal-Industry.png', 'Goal-Inequalities.png', 'Goal-Sustainable-Cities.png', 'Goal-Responsible-Consumption.png', 'Goal-Climate-Action.png', 'Goal-Life-Water.png', 'Goal-Life-Land.png', 'Goal-Institutions.png', 'Goal-Partnership.png', 'Global-Goals.png'];

const baseUrl = './Assets/images/Goals/';

const imagesFigure = document.getElementById("imgFigure");

const createGallery = () => {
    imagesArray.forEach((img) => {
        const figureImage = document.createElement("img");
        const figureImageSrc = baseUrl + img;
        figureImage.src = figureImageSrc;

        imagesFigure.appendChild(figureImage);
    })
} 

window.addEventListener("load", () => {
    createGallery();
})