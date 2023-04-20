const sidebar = document.querySelector('.sidebar');
const sidebarWidth = sidebar.clientWidth -20;
const sidebarHeight = sidebar.clientHeight;



const data = {
    nodes: [
        { id: 1, label: "Vossian Antonomasia", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 2, label: "Neural Networks", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 3, label: "Classification", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 4, label: "Sequence Tagging", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 5, label: "Python", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 6, label: "D3.js", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 7, label: "BERT", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 8, label: "Cross-Lingual", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 9, label: "Computational Linguistics", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 10, label: "NLP", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 11, label: "Digital Humanities", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 12, label: "XLM-RoBERTa", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 13, label: "Question Answering", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 14, label: "Coreference Resolution", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 15, label: "Teaching", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 16, label: "SQL", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 17, label: "Humboldt-Universität", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 18, label: "Berlin", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 19, label: "TU Berlin", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 20, label: "HU Berlin", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 21, label: "TU Darmstadt", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 22, label: "KTH Stockholm", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 23, label: "Mathematics", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 24, label: "optimization", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 25, label: "photography", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 26, label: "football", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },
        { id: 27, label: "Machine Learning", x: Math.random() * sidebarWidth, y: Math.random() * sidebarHeight, tx: Math.random() * sidebarWidth, ty: Math.random() * sidebarHeight },


    ],
};


const svg = d3.select(".sidebar")
    .append("svg")
    .attr("width", sidebarWidth)
    .attr("height", sidebarHeight)
    .attr("viewBox", `0 0 ${sidebarWidth} ${sidebarHeight}`)
    .style("position", "absolute")
    .style("top", "0")
    .style("left", "0")
    .style("z-index", "-1");


const node = svg.selectAll("g")
    .data(data.nodes)
    .enter()
    .append("g");

const circles = node.append("circle")
    .attr("r", 5)
    .attr("fill", "none");

const labels = node.append("text")
    .text((d) => d.label)
    .attr("text-anchor", "middle")
    .attr("dy", 3)
    .attr("font-size", "12px")
    .attr("fill", "grey")
    .style("font-family", "Roboto");


function unitDirectionVector(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return { x: dx / distance, y: dy / distance };
}
function updateNodePositions(nodes, width, height, speed, padding) {
    nodes.forEach((node) => {
        const direction = unitDirectionVector(node.x, node.y, node.tx, node.ty);

        node.x += direction.x * speed;
        node.y += direction.y * speed;

        // When the node is close enough to the target, set a new target
        if (Math.abs(node.x - node.tx) < speed && Math.abs(node.y - node.ty) < speed) {
            node.tx = Math.random() * (width - 2 * padding) + padding + Math.random() * 2 - 1;
            node.ty = Math.random() * (height - 2 * padding) + padding + Math.random() * 2 - 1;

        }

        node.x = Math.max(padding, Math.min(width - padding, node.x));
        node.y = Math.max(padding, Math.min(height - padding, node.y));
    });
}



function animateNodes() {
    const speed = 0.35; // Adjust the speed value for constant movement
    const padding = 10;

    updateNodePositions(data.nodes, sidebarWidth, sidebarHeight, speed, padding);

    circles.attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);

    labels.attr("x", (d) => d.x)
        .attr("y", (d) => d.y);

    requestAnimationFrame(animateNodes);
}



animateNodes();
