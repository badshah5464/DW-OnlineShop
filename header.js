let header = document.getElementById("header").innerHTML = `
<div class="logo">
    <img src="./MetalDW-logo.png" alt="Logo">
    <p><span>D</span>W-<span>O</span>nline<span>S</span>hop</p>
</div>

<section class="navigation-icon">
    <nav>
        <ul>
            <li><a href="./index.html" class="cart-icon"><i class="fa-solid fa-house"></i></a></li>
            <li><a href="#footer" class="cart-icon"><i class="fa-solid fa-circle-info"></i></a></li>
        </ul>
    </nav>

    <div>
        <div id="cartIcon" class="cart-icon"><i class="fa-solid fa-cart-shopping"></i></div>
        <div class="cart-detail" id="cartDetail"></div>
    </div>
</section>
`;