/*export const checkImageURL = (url) => {
    if(!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$','i');
        return pattern.test(url);
    }
};*/

//Have to use more generic function since not all 
//job images are explicity image extensions
export const checkImageURL = (url) => {
    if (!url) return false;

    try {
        // Check if URL is valid using the URL constructor
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};
