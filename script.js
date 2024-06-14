document.addEventListener('DOMContentLoaded', function () {

    const defaultOption = document.querySelector('.bundle_size_option.default');
    defaultOption.click();
});
document.querySelectorAll('.bundle_size_option').forEach(option => {
    option.addEventListener('click', function () {

        const size = this.getAttribute('datasize');


        document.querySelectorAll('.bundle_size_option').forEach(opt => {
            opt.style.backgroundColor = 'white';
            opt.style.color = 'black';
            opt.classList.remove('active');
        });
        const productContainer = document.getElementById('product_container');
        productContainer.innerHTML = '';
        this.style.backgroundColor = 'rgb(228, 94, 16)';
        this.style.color = 'white';
        this.classList.add('active');
        const imageUrl = 'images/mahina.jpg';

        for (let i = 0; i < size; i++) {
            const container=document.createElement('div');
            const productDiv = document.createElement('div');
            container.className='container';
            
            const line=document.createElement('div');
            line.setAttribute('data_idx',i);
            line.className='line';
            productDiv.className = 'product';
            productDiv.setAttribute('data_idx', i);
            const productDivInside_2 = document.createElement('div');
            productDivInside_2.className = 'product-name'
            const imgElement = document.createElement('img');
            imgElement.className = 'image';
            imgElement.src = imageUrl;
            imgElement.alt = 'Product Image';
            
            productDiv.appendChild(imgElement);


            productDivInside_2.textContent = 'Product';

            productDiv.appendChild(productDivInside_2);
            container.appendChild(productDiv);
            container.appendChild(line);
            productContainer.appendChild(container);
            
        }
    });
});
