function calculateTriangleArea() {
    const triangleBaseField = document.getElementById('triangle-base');
    const triangleBaseFieldString = triangleBaseField.value;
    const base = parseFloat(triangleBaseFieldString);

    const triangleHeightField = document.getElementById('triangle-height');
    const triangleHeightFieldString = triangleHeightField.value;
    const height = parseFloat(triangleHeightFieldString);

    const area = 0.5 * base * height;

    const triangleAreaField = document.getElementById('triangle-area');
    triangleAreaField.innerText = area;

}


function calculateRectangleArea() {
    const rectangleWidthField = document.getElementById('rectangle-width');
    const rectangleWidthFieldString = rectangleWidthField.value;
    const width = parseFloat(rectangleWidthFieldString);

    const rectangleLengthField = document.getElementById('rectangle-length');
    const rectangleLengthFieldString = rectangleLengthField.value;
    const length = parseFloat(rectangleLengthFieldString);

    const area = width * length;

    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerText = area;

}


function calculateParallelogramArea() {
    const parallelogramBaseField = document.getElementById('parallelogram-base');
    const parallelogramBaseFieldString = parallelogramBaseField.value;
    const base = parseFloat(parallelogramBaseFieldString);

    const parallelogramHeightField = document.getElementById('parallelogram-height');
    const parallelogramHeightFieldString = parallelogramHeightField.value;
    const height = parseFloat(parallelogramHeightFieldString);

    const area = base * height;

    const parallelogramAreaField = document.getElementById('parallelogram-area');
    parallelogramAreaField.innerText = area;

}


function calculateEllipseArea() {
    const ellipseMajorRadiusField = document.getElementById('ellipse-major-radius');
    const ellipseMajorRadiusFieldString = ellipseMajorRadiusField.value;
    const majorRadius = parseFloat(ellipseMajorRadiusFieldString);

    const ellipseMinorRadiusField = document.getElementById('ellipse-minor-radius');
    const ellipseMinorRadiusFieldString = ellipseMinorRadiusField.value;
    const minorRadius = parseFloat(ellipseMinorRadiusFieldString);

    const area = 3.1416 * majorRadius * minorRadius;

    const EllipseAreaField = document.getElementById('ellipse-area');
    EllipseAreaField.innerText = area;

}


function calculateRhombusArea() {
    const rhombusDiagonals1Field = document.getElementById('rhombus-diagonals-1');
    const rhombusDiagonals1String = rhombusDiagonals1Field.value;
    const Diagonals1 = parseFloat(rhombusDiagonals1String);

    const rhombusDiagonals2Field = document.getElementById('rhombus-diagonals-2');
    const rhombusDiagonals2String = rhombusDiagonals2Field.value;
    const Diagonals2 = parseFloat(rhombusDiagonals2String);

    const area = 0.5 * Diagonals1 * Diagonals2;

    const rhombusAreaField = document.getElementById('rhombus-area');
    rhombusAreaField.innerText = area;

}


function calculatePentagonArea() {
    const pentagonPerimeterField = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterFieldString = pentagonPerimeterField.value;
    const perimeter = parseFloat(pentagonPerimeterFieldString);

    const pentagonApothemField = document.getElementById('pentagon-apothem');
    const pentagonApothemFieldString = pentagonApothemField.value;
    const apothem = parseFloat(pentagonApothemFieldString);

    const area = 0.5 * perimeter * apothem;

    const pentagonAreaField = document.getElementById('pentagon-area');
    pentagonAreaField.innerText = area;

}