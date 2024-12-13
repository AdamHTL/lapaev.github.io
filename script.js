/* Responsive layout using Flexbox */
body {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    background-image: url('https://unsplash.com/photos/christmas-background'); /* Replace with a valid Christmas image URL */
    background-size: cover;
    background-position: center;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 15px;
    width: 90%;
    max-width: 500px;
}

input, button {
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: #ff0000; /* Red color for Christmas */
    color: #fff;
    font-weight: bold;
    width: 100%;
    max-width: 300px;
}

button:hover {
    background-color: #008000; /* Green color for hover effect */
}

#output, #detailedForecast, #additionalMetrics {
    margin-top: 20px;
    width: 100%;
    text-align: center;
}

/* Flexbox layout for larger screens */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        padding: 30px;
        max-width: 800px;
        gap: 20px;
    }

    input, button {
        max-width: 200px;
        margin-bottom: 10px;
    }
}
