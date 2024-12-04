document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour mettre à jour le prix total
    const updateTotal = () => {
        let total = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            const price = parseFloat(item.querySelector(".item-price").textContent.replace("$", ""));
            const quantity = parseInt(item.querySelector(".item-quantity").textContent);
            total += price * quantity;
        });
        document.querySelector("#total-price").textContent = `$${total.toFixed(2)}`;
    };

    // Gérer les clics sur les boutons "+"
    document.querySelectorAll(".btn-increase").forEach(button => {
        button.addEventListener("click", (e) => {
            const quantityElement = e.target.closest(".cart-item").querySelector(".item-quantity");
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotal();
        });
    });

    // Gérer les clics sur les boutons "-"
    document.querySelectorAll(".btn-decrease").forEach(button => {
        button.addEventListener("click", (e) => {
            const quantityElement = e.target.closest(".cart-item").querySelector(".item-quantity");
            const currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotal();
            }
        });
    });

    // Supprimer un article
    document.querySelectorAll(".btn-remove").forEach(button => {
        button.addEventListener("click", (e) => {
            e.target.closest(".cart-item").remove();
            updateTotal();
        });
    });

    // Aimer un article (changer la couleur du cœur)
    document.querySelectorAll(".btn-like").forEach(button => {
        button.addEventListener("click", (e) => {
            e.target.classList.toggle("liked");
        });
    });

    // Initialiser le prix total au chargement
    updateTotal();
});
