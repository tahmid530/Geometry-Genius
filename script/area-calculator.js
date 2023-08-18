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