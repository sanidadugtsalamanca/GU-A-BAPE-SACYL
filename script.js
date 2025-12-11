document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 3. Tab Navigation Logic
    const navButtons = document.querySelectorAll('.nav-btn');
    const mobileNavButtons = document.querySelectorAll('.nav-btn-mobile');
    const tabContents = document.querySelectorAll('.tab-content');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    let isMobileMenuOpen = false;

    function switchTab(tabId) {
        // Hide all contents
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Show target content
        const target = document.getElementById(`view-${tabId}`);
        if (target) {
            target.classList.add('active');
            // Re-trigger animation
            target.classList.remove('animate-fade-in');
            void target.offsetWidth; // trigger reflow
            target.classList.add('animate-fade-in');
        }

        // Update Button States (Desktop)
        navButtons.forEach(btn => {
            if (btn.dataset.tab === tabId) {
                btn.className = 'nav-btn active flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 font-medium bg-red-600 text-white shadow-md shadow-red-200';
            } else {
                btn.className = 'nav-btn flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 font-medium bg-white text-slate-600 hover:bg-red-50 hover:text-red-600';
            }
        });

        // Update Button States (Mobile)
        mobileNavButtons.forEach(btn => {
            if (btn.dataset.tab === tabId) {
                btn.className = 'nav-btn-mobile w-full text-left flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 font-medium bg-red-600 text-white';
            } else {
                btn.className = 'nav-btn-mobile w-full text-left flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 font-medium bg-white text-slate-600';
            }
        });

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Add listeners to desktop buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });

    // Add listeners to mobile buttons
    mobileNavButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
            // Close mobile menu
            isMobileMenuOpen = false;
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if(icon) {
                 // Reset icon to menu
                 mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
                 lucide.createIcons();
            }
        });
    });

    // 4. Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        if (isMobileMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.innerHTML = '<i data-lucide="x"></i>';
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
        }
        lucide.createIcons();
    });

    // 5. Calculator Logic
    const inputs = {
        sns: document.getElementById('input-sns'),
        privada: document.getElementById('input-privada'),
        ord: document.getElementById('input-ord'),
        ects: document.getElementById('input-ects')
    };

    const displays = {
        total: document.getElementById('score-total'),
        exp: document.getElementById('score-exp'),
        form: document.getElementById('score-form')
    };

    const CONSTANTS = {
        SNS: 0.2,
        PRIVADA: 0.1,
        ORD: 0.3,
        ECTS: 0.5
    };

    function calculate() {
        const valSns = parseFloat(inputs.sns.value) || 0;
        const valPriv = parseFloat(inputs.privada.value) || 0;
        const valOrd = parseFloat(inputs.ord.value) || 0;
        const valEcts = parseFloat(inputs.ects.value) || 0;

        const expScore = (valSns * CONSTANTS.SNS) + (valPriv * CONSTANTS.PRIVADA);
        const formScore = (valOrd * CONSTANTS.ORD) + (valEcts * CONSTANTS.ECTS);
        const total = expScore + formScore;

        displays.total.textContent = total.toFixed(2);
        displays.exp.textContent = expScore.toFixed(2);
        displays.form.textContent = formScore.toFixed(2);
    }

    // Attach listeners
    Object.values(inputs).forEach(input => {
        input.addEventListener('input', calculate);
    });

    // Reset button
    document.getElementById('btn-reset').addEventListener('click', () => {
        Object.values(inputs).forEach(input => input.value = '');
        calculate();
    });
});
