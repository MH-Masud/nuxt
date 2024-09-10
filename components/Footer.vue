<!-- components/Footer.vue -->
<template>
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-links">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/albums">Albums</NuxtLink>
                    <NuxtLink to="/todos">Todos</NuxtLink>
                    <NuxtLink to="/users">Users</NuxtLink>
                </div>
                <div class="footer-info">
                    <p>&copy; 2024 MySite. All rights reserved.</p>
                    <p>1234 Main St, Anytown, USA</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-container {
    padding: 1rem;
    background-color: #333;
    color: #fff;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-links {
    margin-bottom: 1rem;
}

.footer-links a {
    color: #fff;
    text-decoration: none;
    margin: 0 0.5rem;
}

.footer-info {
    font-size: 0.875rem;
}

/* Mobile styles */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
    }
}
</style>