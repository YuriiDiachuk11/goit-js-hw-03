function slugify(title) {
    const transformToMas = title.split(" ");
    const normalizedSlug = transformToMas.join ( "-").toLowerCase();
    return normalizedSlug;
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));