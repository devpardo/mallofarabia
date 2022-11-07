export default {
    methods: {
        goTo(item) {
            switch(item.type) {
                case 'phone':
                    window.open(`tel:${item.name}`, '_blank')
                break;
                case 'location':
                    window.open(
                        `https://www.google.com/maps/search/?api=1&query=${item.name}`,
                        '_blank'
                    );
                break;
            }
        }
    }
}