var nodes = new vis.DataSet([
    { id: 1, label: 'INTERNET', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png' },
    { id: 2, label: 'FIREWALL', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/1042/1042308.png' },
    { id: 3, label: 'ROUTER', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/81/81443.png' },
    { id: 4, label: 'SERVER', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/2333/2333338.png' },
    { id: 5, label: 'HUB', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/565/565451.png' },
    { id: 6, label: 'Client PC', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/3067/3067260.png' },
    { id: 7, label: 'WiFi AP', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/159/159599.png' },
    { id: 8, label: 'Laptop', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/428/428001.png' },
    { id: 9, label: 'Phone', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/186/186239.png' },
    { id: 10, label: 'Printer', shape: 'image', image: 'https://cdn-icons-png.flaticon.com/512/446/446991.png' }
]);

// Animation ke liye 'dashes' aur 'arrows' ka use
var edges = new vis.DataSet([
    { from: 1, to: 2, arrows: 'to', dashes: true },
    { from: 2, to: 3, arrows: 'to', dashes: true },
    { from: 3, to: 4, arrows: 'to', dashes: true },
    { from: 3, to: 5, arrows: 'to', dashes: true },
    { from: 5, to: 6, arrows: 'to', dashes: true },
    { from: 3, to: 7, arrows: 'to', dashes: true },
    { from: 7, to: 8, arrows: 'to', dashes: true },
    { from: 7, to: 9, arrows: 'to', dashes: true },
    { from: 7, to: 10, arrows: 'to', dashes: true }
]);

var container = document.getElementById('mynetwork');
var data = { nodes: nodes, edges: edges };

var options = {
    nodes: { size: 30, font: { size: 14, color: '#34495e' } },
    edges: {
        width: 2,
        color: { color: '#3498db', highlight: '#2980b9' },
        smooth: { type: 'curvedCW', roundness: 0.2 }
    },
    physics: { enabled: true, stabilization: true }
};

var network = new vis.Network(container, data, options);

// Data Flow Animation Logic
var offset = 0;
function animate() {
    offset++;
    network.setOptions({
        edges: {
            dashes: [5, 5],
            dashOffset: -offset // Yeh lines ko chalta hua dikhayega
        }
    });
    requestAnimationFrame(animate);
}
animate();
