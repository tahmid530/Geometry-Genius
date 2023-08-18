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
    console.log(width);

    const rectangleLengthField = document.getElementById('rectangle-length');
    const rectangleLengthFieldString = rectangleLengthField.value;
    const length = parseFloat(rectangleLengthFieldString);
    console.log(length);

    const area = width * length;

    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerText = area;

}


function calculateParallelogramArea() {
    const parallelogramBaseField = document.getElementById('parallelogram-base');
    const parallelogramBaseFieldString = parallelogramBaseField.value;
    const base = parseFloat(parallelogramBaseFieldString);
    console.log(base);

    const parallelogramHeightField = document.getElementById('parallelogram-height');
    const parallelogramHeightFieldString = parallelogramHeightField.value;
    const height = parseFloat(parallelogramHeightFieldString);
    console.log(height);

    const area = base * height;

    const parallelogramAreaField = document.getElementById('parallelogram-area');
    parallelogramAreaField.innerText = area;

}


function calculateEllipseArea() {
    const ellipseMajorRadiusField = document.getElementById('ellipse-major-radius');
    const ellipseMajorRadiusFieldString = ellipseMajorRadiusField.value;
    const majorRadius = parseFloat(ellipseMajorRadiusFieldString);
    console.log(majorRadius);

    const ellipseMinorRadiusField = document.getElementById('ellipse-minor-radius');
    const ellipseMinorRadiusFieldString = ellipseMinorRadiusField.value;
    const minorRadius = parseFloat(ellipseMinorRadiusFieldString);
    console.log(minorRadius);

    const area = 3.1416 * majorRadius * minorRadius;

    const EllipseAreaField = document.getElementById('ellipse-area');
    EllipseAreaField.innerText = area;

}


function calculateRhombusArea() {
    const rhombusDiagonals1Field = document.getElementById('rhombus-diagonals-1');
    const rhombusDiagonals1String = rhombusDiagonals1Field.value;
    const rhombusDiagonals1 = parseFloat(rhombusDiagonals1String);
    console.log(rhombusDiagonals1);

    const rhombusDiagonals2Field = document.getElementById('rhombus-diagonals-2');
    const rhombusDiagonals2String = rhombusDiagonals2Field.value;
    const rhombusDiagonals2 = parseFloat(rhombusDiagonals2String);
    console.log(rhombusDiagonals2);

    const area = 0.5 * rhombusDiagonals1 * rhombusDiagonals2;

    const rhombusAreaField = document.getElementById('rhombus-area');
    rhombusAreaField.innerText = area;

}