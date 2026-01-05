// const data = [
//     {
//         "page": "links",
//         "categories": {
//             "Category 1 Name": [
//                 { "name": "Item 1 Name", "link": "https://link1.com" },
//                 { "name": "Item 2 Name", "link": "https://link2.com" }
//             ],
//             "Category 2 Name": [
//                 { "name": "Item A", "link": "https://linkA.com" },
//                 { "name": "Item B", "link": "https://linkB.com" }
//             ]
//         }
//     },
//     {
//         "page": "Another Page",
//         "categories": {
//             "Category X": [
//                 { "name": "Item X1", "link": "https://linkX1.com" }
//             ]
//         }
//     }
// ] 

const urlParams = new URLSearchParams(window.location.search);
// const currentPage = "misc" //window.location.pathname.split("/").pop().replace(".html", "");
const currentPage = urlParams.get('page');

const container = document.getElementById('container');
const pageData = data.find(d => d.page === currentPage);

if (pageData) {
    Object.entries(pageData.category).forEach(([categoryName, items]) => {
        const categoryDiv = document.createElement('div');

        // Heading
        const heading = document.createElement('a');
        heading.href = "#";
        heading.className = "heading";

        // Add icon
        const icon = document.createElement('img');
        icon.src = "https://ktyq.github.io/ktyq/assets/icons/sparkle-fill-svgrepo-com.svg";
        icon.alt = "icon";
        icon.className = "btn-icon";

        // Add text
        const text = document.createElement('span');
        text.className = "btn-text";
        text.textContent = categoryName;

        // append icon and text to heading
        heading.appendChild(icon);
        heading.appendChild(text);

        heading.addEventListener('click', e => {
            e.preventDefault();
            itemsDiv.classList.toggle('hidden');
        });

        // Items container
        const itemsDiv = document.createElement('div');
        itemsDiv.className = "items hidden category"; // initially hidden

        items.forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.target = "_blank";
            link.rel = "noopener";
            link.textContent = item.name;
            link.className = "content-link";
            itemsDiv.appendChild(link);

            itemsDiv.appendChild(document.createElement('br'));
        });

   

        categoryDiv.appendChild(heading);
        categoryDiv.appendChild(itemsDiv);
        container.appendChild(categoryDiv);
    });

    container.appendChild(spaceDiv);
} else {
    container.textContent = "oops! nothing here...";
}
