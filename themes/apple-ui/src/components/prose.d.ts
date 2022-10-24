export declare const prose: {
    '.prose': {
        color: string;
        maxWidth: string;
        fontSize: string;
        lineHeight: string;
    };
    '.prose [class~=lead]': {
        color: string;
        fontSize: string;
        lineHeight: string;
        marginTop: string;
        marginBottom: string;
    };
    '.prose a': {
        color: string;
        textDecoration: string;
    };
    '.prose a:hover': {
        textDecoration: string;
    };
    '.prose kbd': {
        fontSize: string;
        fontWeight: string;
        padding: string;
        background: string;
        borderRadius: number;
        color: string;
        border: string;
        boxShadow: string;
    };
    '.prose mark': {
        background: string;
        padding: string;
    };
    '.prose strong': {
        color: string;
        fontWeight: string;
    };
    '.prose ol': {
        counterReset: string;
        marginTop: string;
        marginBottom: string;
    };
    '.prose ol > li': {
        position: string;
        counterIncrement: string;
        paddingLeft: string;
    };
    '.prose ol > li::before': {
        content: string;
        position: string;
        fontWeight: string;
        color: string;
        left: string;
    };
    '.prose ul > li': {
        position: string;
        paddingLeft: string;
    };
    '.prose ul > li::before': {
        content: string;
        position: string;
        backgroundColor: string;
        borderRadius: string;
        width: string;
        height: string;
        top: string;
        left: string;
    };
    '.prose hr': {
        borderColor: string;
        borderTopWidth: number;
        marginTop: string;
        marginBottom: string;
    };
    '.prose blockquote': {
        fontWeight: string;
        fontStyle: string;
        color: string;
        borderLeftWidth: string;
        borderLeftColor: string;
        quotes: string;
        marginTop: string;
        marginBottom: string;
        paddingLeft: string;
    };
    '.prose blockquote p:first-of-type::before': {
        content: string;
    };
    '.prose blockquote p:last-of-type::after': {
        content: string;
    };
    '.prose h1': {
        color: string;
        fontWeight: string;
        fontSize: string;
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
    };
    '.prose h2': {
        color: string;
        fontWeight: string;
        fontSize: string;
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
    };
    '.prose h3': {
        fontSize: string;
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
    };
    '.prose h3, .prose h4': {
        color: string;
        fontWeight: string;
    };
    '.prose h4': {
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
    };
    '.prose figure figcaption': {
        color: string;
        fontSize: string;
        lineHeight: string;
        marginTop: string;
    };
    '.prose code': {
        color: string;
        fontWeight: string;
        fontSize: string;
    };
    '.prose code::after, .prose code::before': {
        content: string;
    };
    '.prose pre': {
        color: string;
        backgroundColor: string;
        overflowX: string;
        fontSize: string;
        lineHeight: string;
        marginTop: string;
        marginBottom: string;
        borderRadius: string;
        padding: string;
    };
    '.prose pre code': {
        backgroundColor: string;
        borderWidth: string;
        borderRadius: string;
        padding: string;
        fontWeight: string;
        color: string;
        fontSize: string;
        fontFamily: string;
        lineHeight: string;
    };
    '.prose pre code::after, .prose pre code::before': {
        content: string;
    };
    '.prose table': {
        width: string;
        tableLayout: string;
        textAlign: string;
        marginTop: string;
        marginBottom: string;
        fontSize: string;
        lineHeight: string;
    };
    '.prose thead': {
        color: string;
        fontWeight: string;
        borderBottomWidth: number;
        borderBottomColor: string;
    };
    '.prose thead th': {
        verticalAlign: string;
        paddingRight: string;
        paddingBottom: string;
        paddingLeft: string;
    };
    '.prose tbody tr': {
        borderBottomWidth: number;
        borderBottomColor: string;
    };
    '.prose tbody tr:last-child': {
        borderBottomWidth: string;
    };
    '.prose tbody td': {
        verticalAlign: string;
        padding: string;
    };
    '.prose p': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose figure, .prose img': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose figure > *': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose h2 code': {
        fontSize: string;
    };
    '.prose h3 code': {
        fontSize: string;
    };
    '.prose ul': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose li': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose > ul > li p': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose > ul > li > :first-child': {
        marginTop: string;
    };
    '.prose > ul > li > :last-child': {
        marginBottom: string;
    };
    '.prose > ol > li > :first-child': {
        marginTop: string;
    };
    '.prose > ol > li > :last-child': {
        marginBottom: string;
    };
    '.prose ol ol, .prose ol ul, .prose ul ol, .prose ul ul': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose h2 + *, .prose h3 + *, .prose h4 + *, .prose hr + *': {
        marginTop: string;
    };
    '.prose thead th:first-child': {
        paddingLeft: string;
    };
    '.prose thead th:last-child': {
        paddingRight: string;
    };
    '.prose tbody td:first-child': {
        paddingLeft: string;
    };
    '.prose tbody td:last-child': {
        paddingRight: string;
    };
    '.prose > :first-child': {
        marginTop: string;
    };
    '.prose > :last-child': {
        marginBottom: string;
    };
    '.prose-sm': {
        fontSize: string;
        lineHeight: string;
    };
    '.prose-sm p': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose-sm [class~=lead]': {
        fontSize: string;
        lineHeight: string;
        marginTop: string;
        marginBottom: string;
    };
    '.prose-sm blockquote': {
        marginTop: string;
        marginBottom: string;
        paddingLeft: string;
    };
    '.prose-sm h1': {
        fontSize: string;
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
    };
    '.prose-sm h2': {
        fontSize: string;
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
    };
    '.prose-sm h3': {
        fontSize: string;
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
    };
    '.prose-sm h4': {
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
    };
    '.prose-sm figure, .prose-sm img': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose-sm figure > *': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose-sm figure figcaption': {
        fontSize: string;
        lineHeight: string;
        marginTop: string;
    };
    '.prose-sm code': {
        fontSize: string;
    };
    '.prose-sm h2 code': {
        fontSize: string;
    };
    '.prose-sm h3 code': {
        fontSize: string;
    };
    '.prose-sm pre': {
        fontSize: string;
        lineHeight: string;
        marginTop: string;
        marginBottom: string;
        borderRadius: string;
        padding: string;
    };
    '.prose-sm ol, .prose-sm ul': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose-sm li': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose-sm ol > li': {
        paddingLeft: string;
    };
    '.prose-sm ol > li::before': {
        left: string;
    };
    '.prose-sm ul > li': {
        paddingLeft: string;
    };
    '.prose-sm ul > li::before': {
        height: string;
        width: string;
        top: string;
        left: string;
    };
    '.prose-sm > ul > li p': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose-sm > ul > li > :first-child': {
        marginTop: string;
    };
    '.prose-sm > ul > li > :last-child': {
        marginBottom: string;
    };
    '.prose-sm > ol > li > :first-child': {
        marginTop: string;
    };
    '.prose-sm > ol > li > :last-child': {
        marginBottom: string;
    };
    '.prose-sm ol ol, .prose-sm ol ul, .prose-sm ul ol, .prose-sm ul ul': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose-sm hr': {
        marginTop: string;
        marginBottom: string;
    };
    '.prose-sm h2 + *, .prose-sm h3 + *, .prose-sm h4 + *, .prose-sm hr + *': {
        marginTop: string;
    };
    '.prose-sm table': {
        fontSize: string;
        lineHeight: string;
    };
    '.prose-sm thead th': {
        paddingRight: string;
        paddingBottom: string;
        paddingLeft: string;
    };
    '.prose-sm thead th:first-child': {
        paddingLeft: string;
    };
    '.prose-sm thead th:last-child': {
        paddingRight: string;
    };
    '.prose-sm tbody td': {
        padding: string;
    };
    '.prose-sm tbody td:first-child': {
        paddingLeft: string;
    };
    '.prose-sm tbody td:last-child': {
        paddingRight: string;
    };
    '.prose-sm > :first-child': {
        marginTop: string;
    };
    '.prose-sm > :last-child': {
        marginBottom: string;
    };
    '@media (min-width: 640px)': {
        '.sm\\:prose': {
            color: string;
            maxWidth: string;
            fontSize: string;
            lineHeight: string;
        };
        '.sm\\:prose [class~=lead]': {
            color: string;
            fontSize: string;
            lineHeight: string;
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose a': {
            color: string;
            textDecoration: string;
        };
        '.sm\\:prose strong': {
            color: string;
            fontWeight: string;
        };
        '.sm\\:prose ol': {
            counterReset: string;
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose ol > li': {
            position: string;
            counterIncrement: string;
            paddingLeft: string;
        };
        '.sm\\:prose ol > li::before': {
            content: string;
            position: string;
            fontWeight: string;
            color: string;
            left: string;
        };
        '.sm\\:prose ul > li': {
            position: string;
            paddingLeft: string;
        };
        '.sm\\:prose ul > li::before': {
            content: string;
            position: string;
            backgroundColor: string;
            borderRadius: string;
            width: string;
            height: string;
            top: string;
            left: string;
        };
        '.sm\\:prose hr': {
            borderColor: string;
            borderTopWidth: number;
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose blockquote': {
            fontWeight: string;
            fontStyle: string;
            color: string;
            borderLeftWidth: string;
            borderLeftColor: string;
            quotes: string;
            marginTop: string;
            marginBottom: string;
            paddingLeft: string;
        };
        '.sm\\:prose blockquote p:first-of-type::before': {
            content: string;
        };
        '.sm\\:prose blockquote p:last-of-type::after': {
            content: string;
        };
        '.sm\\:prose h1': {
            color: string;
            fontWeight: string;
            fontSize: string;
            marginTop: string;
            marginBottom: string;
            lineHeight: string;
        };
        '.sm\\:prose h2': {
            color: string;
            fontWeight: string;
            fontSize: string;
            marginTop: string;
            marginBottom: string;
            lineHeight: string;
        };
        '.sm\\:prose h3': {
            fontSize: string;
            marginTop: string;
            marginBottom: string;
            lineHeight: string;
        };
        '.sm\\:prose h3, .sm\\:prose h4': {
            color: string;
            fontWeight: string;
        };
        '.sm\\:prose h4': {
            marginTop: string;
            marginBottom: string;
            lineHeight: string;
        };
        '.sm\\:prose figure figcaption': {
            color: string;
            fontSize: string;
            lineHeight: string;
            marginTop: string;
        };
        '.sm\\:prose code': {
            color: string;
            fontWeight: string;
            fontSize: string;
        };
        '.sm\\:prose code::after, .sm\\:prose code::before': {
            content: string;
        };
        '.sm\\:prose pre': {
            color: string;
            backgroundColor: string;
            overflowX: string;
            fontSize: string;
            lineHeight: string;
            marginTop: string;
            marginBottom: string;
            borderRadius: string;
            padding: string;
        };
        '.sm\\:prose pre code': {
            backgroundColor: string;
            borderWidth: string;
            borderRadius: string;
            padding: string;
            fontWeight: string;
            color: string;
            fontSize: string;
            fontFamily: string;
            lineHeight: string;
        };
        '.sm\\:prose pre code::after, .sm\\:prose pre code::before': {
            content: string;
        };
        '.sm\\:prose table': {
            width: string;
            tableLayout: string;
            textAlign: string;
            marginTop: string;
            marginBottom: string;
            fontSize: string;
            lineHeight: string;
        };
        '.sm\\:prose thead': {
            color: string;
            fontWeight: string;
            borderBottomWidth: number;
            borderBottomColor: string;
        };
        '.sm\\:prose thead th': {
            verticalAlign: string;
            paddingRight: string;
            paddingBottom: string;
            paddingLeft: string;
        };
        '.sm\\:prose tbody tr': {
            borderBottomWidth: number;
            borderBottomColor: string;
        };
        '.sm\\:prose tbody tr:last-child': {
            borderBottomWidth: string;
        };
        '.sm\\:prose tbody td': {
            verticalAlign: string;
            padding: string;
        };
        '.sm\\:prose p': {
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose figure, .sm\\:prose img': {
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose figure > *': {
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose h2 code': {
            fontSize: string;
        };
        '.sm\\:prose h3 code': {
            fontSize: string;
        };
        '.sm\\:prose ul': {
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose li': {
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose > ul > li p': {
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose > ul > li > :first-child': {
            marginTop: string;
        };
        '.sm\\:prose > ul > li > :last-child': {
            marginBottom: string;
        };
        '.sm\\:prose > ol > li > :first-child': {
            marginTop: string;
        };
        '.sm\\:prose > ol > li > :last-child': {
            marginBottom: string;
        };
        '.sm\\:prose ol ol, .sm\\:prose ol ul, .sm:prose ul ol, .sm:prose ul ul': {
            marginTop: string;
            marginBottom: string;
        };
        '.sm\\:prose h2 + *, .sm\\:prose h3 + *, .sm:prose h4 + *, .sm:prose hr + *': {
            marginTop: string;
        };
        '.sm\\:prose thead th:first-child': {
            paddingLeft: string;
        };
        '.sm\\:prose thead th:last-child': {
            paddingRight: string;
        };
        '.sm\\:prose tbody td:first-child': {
            paddingLeft: string;
        };
        '.sm\\:prose tbody td:last-child': {
            paddingRight: string;
        };
        '.sm\\:prose > :first-child': {
            marginTop: string;
        };
        '.sm\\:prose > :last-child': {
            marginBottom: string;
        };
        '.sm\\:flex': {
            display: string;
        };
        '.sm\\:items-center': {
            alignItems: string;
        };
        '.sm\\:justify-between': {
            justifyContent: string;
        };
        '.sm\\:h-8': {
            height: string;
        };
        '.sm\\:px-6': {
            paddingLeft: string;
            paddingRight: string;
        };
        '.sm\\:py-12': {
            paddingTop: string;
            paddingBottom: string;
        };
    };
    '@media (min-width: 1024px)': {
        '.lg\\:prose-lg': {
            fontSize: string;
            lineHeight: string;
        };
        '.lg\\:prose-lg p': {
            marginTop: string;
            marginBottom: string;
        };
        '.lg\\:prose-lg [class~=lead]': {
            fontSize: string;
            lineHeight: string;
            marginTop: string;
            marginBottom: string;
        };
        '.lg\\:prose-lg blockquote': {
            marginTop: string;
            marginBottom: string;
            paddingLeft: string;
        };
        '.lg\\:prose-lg h1': {
            fontSize: string;
            marginTop: string;
            marginBottom: string;
            lineHeight: string;
        };
        '.lg\\:prose-lg h2': {
            fontSize: string;
            marginTop: string;
            marginBottom: string;
            lineHeight: string;
        };
        '.lg\\:prose-lg h3': {
            fontSize: string;
            marginTop: string;
            marginBottom: string;
            lineHeight: string;
        };
        '.lg\\:prose-lg h4': {
            marginTop: string;
            marginBottom: string;
            lineHeight: string;
        };
        '.lg\\:prose-lg figure, .lg\\:prose-lg img': {
            marginTop: string;
            marginBottom: string;
        };
        '.lg\\:prose-lg figure > *': {
            marginTop: string;
            marginBottom: string;
        };
        '.lg\\:prose-lg figure figcaption': {
            fontSize: string;
            lineHeight: string;
            marginTop: string;
        };
        '.lg\\:prose-lg code': {
            fontSize: string;
        };
        '.lg\\:prose-lg h2 code': {
            fontSize: string;
        };
        '.lg\\:prose-lg h3 code': {
            fontSize: string;
        };
        '.lg\\:prose-lg pre': {
            fontSize: string;
            lineHeight: string;
            marginTop: string;
            marginBottom: string;
            borderRadius: string;
            padding: string;
        };
        '.lg\\:prose-lg ol, .lg\\:prose-lg ul': {
            marginTop: string;
            marginBottom: string;
        };
        '.lg\\:prose-lg li': {
            marginTop: string;
            marginBottom: string;
        };
        '.lg\\:prose-lg ol > li': {
            paddingLeft: string;
        };
        '.lg\\:prose-lg ol > li::before': {
            left: string;
        };
        '.lg\\:prose-lg ul > li': {
            paddingLeft: string;
        };
        '.lg\\:prose-lg ul > li::before': {
            width: string;
            height: string;
            top: string;
            left: string;
        };
        '.lg\\:prose-lg > ul > li p': {
            marginTop: string;
            marginBottom: string;
        };
        '.lg\\:prose-lg > ul > li > :first-child': {
            marginTop: string;
        };
        '.lg\\:prose-lg > ul > li > :last-child': {
            marginBottom: string;
        };
        '.lg\\:prose-lg > ol > li > :first-child': {
            marginTop: string;
        };
        '.lg\\:prose-lg > ol > li > :last-child': {
            marginBottom: string;
        };
        '.lg\\:prose-lg ol ol, .lg\\:prose-lg ol ul, .lg\\:prose-lg ul ol, .lg:prose-lg ul ul': {
            marginTop: string;
            marginBottom: string;
        };
        '.lg\\:prose-lg hr': {
            marginTop: string;
            marginBottom: string;
        };
        '.lg\\:prose-lg h2 + *, .lg\\:prose-lg h3 + *, .lg:prose-lg h4 + *, .lg:prose-lg hr + *': {
            marginTop: string;
        };
        '.lg\\:prose-lg table': {
            fontSize: string;
            lineHeight: string;
        };
        '.lg\\:prose-lg thead th': {
            paddingRight: string;
            paddingBottom: string;
            paddingLeft: string;
        };
        '.lg\\:prose-lg thead th:first-child': {
            paddingLeft: string;
        };
        '.lg\\:prose-lg thead th:last-child': {
            paddingRight: string;
        };
        '.lg\\:prose-lg tbody td': {
            padding: string;
        };
        '.lg\\:prose-lg tbody td:first-child': {
            paddingLeft: string;
        };
        '.lg\\:prose-lg tbody td:last-child': {
            paddingRight: string;
        };
        '.lg\\:prose-lg > :first-child': {
            marginTop: string;
        };
        '.lg\\:prose-lg > :last-child': {
            marginBottom: string;
        };
        '.lg\\:max-w-4xl': {
            maxWidth: string;
        };
        '.lg\\:px-8': {
            paddingLeft: string;
            paddingRight: string;
        };
        '.lg\\:py-16': {
            paddingTop: string;
            paddingBottom: string;
        };
    };
};
