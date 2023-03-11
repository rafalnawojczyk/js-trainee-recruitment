import { NextApiRequest, NextApiResponse } from 'next';
import HomepageData from '../../../models/HomepageData';

const dummyData: HomepageData[] = [
    {
        title: 'polar bear',
        subtitle: 'Say hello to your new friend',
        accentWord: 6,
        image: 'https://s3-alpha-sig.figma.com/img/9153/0504/96eb3a7058dc90416aad55ad10d428b1?Expires=1679270400&Signature=mlHuKRgBKWKicdo-r~Khva0f4XAfyzlt5XadweftBpjMTY5LvlPGYb27dQ8JIyo-aS21Od1sMGIW0dtIkWEjx0mwsBvXmKViRRgG6wunyH~ymMoasCS0LxIryuFXeLJZyV6O8KTJhKmmI6tW2kf9-ZWEVYBKQsZ8FU2CYBOYeG85n6HqqYmVqeGFLA0d~nsHoDhLmdvUJCTX4Kw4xnA1Is60UzCIHYQYXjMIMKSPXbWb3m25oyKBV6VlzSLh3l~HxWMATGHY9meKa4JwpzMC3srgJ6Zbvkeic5qRRXAGSYJU~ViOCwP9A-zGu200VGfHAg0klOeJDzqDWWClmO4sQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        altText: 'Polar bear on two legs waving his claw',
    },
    {
        title: 'cheetah',
        subtitle: 'No petting before eating',
        accentWord: 4,
        image: 'https://s3-alpha-sig.figma.com/img/d2fa/0c7d/235a6827c10024295b477e2f632a89e7?Expires=1679270400&Signature=OdiV3s7v15IhAOkmtm4Sc~InfdRCfTu52~1jzvo1oC6fzijrAU2Ao5P8tVd3ycq~Ley4xBIQZ2hblKrIMqdAMe4BKO9h7vR4hV-r54gTCtsUNgc66wqYu4y6I-Abxe0Oy1nK1Fco1RMD~HEs9ZdGt-E422vbPSgprWYJ~fuNGmX6UXgS6jTdQpo0TVA145HMkHG7alb-c7io2mbQWzrEvbB5XMVdVY6SRB~QCFist2d2GmTrseykOXhVJ5ZlNf2yvs9CO1OU7Ek0XGbGm~gT~iuBFs7EsvzgARO0Mlp0wjPmZL3yxmPVdWL4dhWLZrANH9UqD8DF~ohl8H9zujtzsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        altText: 'Cheetah on a log looking forward',
    },
    {
        title: 'panda',
        subtitle: 'Eating always with pleasure',
        accentWord: 4,
        image: 'https://s3-alpha-sig.figma.com/img/7f25/052d/9db8baac60256e024f5dbb1e642c0eaa?Expires=1679270400&Signature=GnI~pPBMhYJj-vtQdppnkCuwkLVmsgz30MV3gKZpVWJSUNB2gBZtwFGj5HLjQXnl4PD~hHVrqDb~yIjGJ6Yq6L-YEYuPiHuvJ4Gn1g98AgbOmDged8xPMDfTGBmf7Ibr5Aq3mM~7cYrq7bTdQk90Av27aMA4cNbfiq6-Tr2FoYPBYJf0N4tCtvjdTlTRf0LyVnZeyqKxG1OAHVH1NHKgrzVa221cj4VY6yE0VrutCwQPI9P9c5UEKGmjliR9Go5kGNVv9q9gPsLIMY7CkBBxCAsFp4UxOqn58LSn0swFTeyt0~RMjyUgQ2Vuw-eC6E009HchHStAynnPTMVSzag7-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        altText: 'Panda eating eucaliptus leaves',
    },
    {
        title: 'fox',
        subtitle: 'Sometimes quite suspicious',
        accentWord: 3,
        image: 'https://s3-alpha-sig.figma.com/img/b7bc/b14c/0d24ebb511e0dbfccd5c3d5791ea24de?Expires=1679270400&Signature=YPBCAVyoYy4I~KhaTzp34LNFfsZi5pcZQMge3IE8gi4~w~NxpVunkG~v34ZoN4JAFcNgEVDXqYuwFDNIZNLYP1bu4U0Y0lAX6I6aSMaIPANm4hkQKtfcc1fkVIDivJFuEBG2j27o8vxTjbwfs1S60pMgxr8rj6xaS-VQkq7ZGhy3PXrOQ9u31dkIdzom8YItrCc0l42r1rzDklq9okHiO2j7ZKiThSrwhh7R0LCFzf6iedq0uyRubYNxrsH-E1i0cdAfkIg76~Qw1-5xlkpFzNknR~zvNuvoNKp2qIT4Jf5fKI5uCqWKN5kq7ruk~~GMv7~AcYd7HMFixNPGIt4p5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        altText: 'Fox in winter landscape during sunset',
    },
    {
        title: 'squirrel',
        subtitle: 'Staying curious',
        accentWord: 2,
        image: 'https://s3-alpha-sig.figma.com/img/892f/5ac5/649e5d5612c9c9d5282d259edd944e6e?Expires=1679270400&Signature=jzpzm1Isa9isG0jZugxmF89yO1EirQMFcLW9zOrkywamUDNhpJ~COsaVxgwPlddY3TEL6XOWrHGgF9HGiIcI6kxj65V6OWqhsDYyG2jLs~t6ygCwBdErOcMlFQQk9kHBADaXxLEKudm1EN90TbuXNB5D9ttAmQeyk05xQDGKxf7RrE4oSJLb53TabdiPkvLnW9~MR7NYZWy0jx3A9tfWm-8dQU78KnnX2lpeHEGWNMVkvCmYs4QH9zvgCOyVHzt0JvqRt85Qu8M0nZKCjTRwKCaaBzgeDA-iIEih4g6ryxASo74YZv5KSkRuABZrb8r02Hje6h5XMhpJSpzPeG2WuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        altText: 'Cute squirrel looking at photographer',
    },
    {
        title: 'butterfly',
        subtitle: 'Majestic every time of a day',
        accentWord: 1,
        image: 'https://s3-alpha-sig.figma.com/img/3a93/1f54/1693f197e1f5c2d69205ee17281bba8b?Expires=1679270400&Signature=dcLc~Xj7YtkVF6DMSW9lxJ45rBjmvmU6K8sj~xr~U-4Xs294PL30qMwgf8KW4YR0akp-~zUuytsPXLnmwa2gyCYLW3eIc30MZhBmKXAyc95putZkH-CG3PgP7yY5UNdePbG4XD-Ot61zOmpFmGcW9NecBNLd85UQKZV2Pt9YXNX7vYCPiMqTJ9O-bgJ-4ZMnjB5KHxj089OZytqC4sxxKUpAS7eMJqwR2mbI3CXqPK-nTPis0X6elJihCERpBCuJzc6ZNCdRZ5-JRPigYdlZWwrWheBmyxjQlma9aK~RjROLlzMvDhO4i-OE93~jhNVIJWSj-ZCUdBY333~qh6ojVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        altText: 'Majestic butterfly resting on a leaf',
    },
    {
        title: 'elephant',
        subtitle: 'It makes a huge difference',
        accentWord: 4,
        image: 'https://s3-alpha-sig.figma.com/img/a7e8/3e7b/ba50c175b1b5dd14c0ff1c5baadc3e11?Expires=1679270400&Signature=Eejz3vVHRga5cvj6f5P~Sfklr2MMOj6yluYwTCNveKeNbJ7dXkTA8WAgw2DOXFNJfWNNKAzCb0KqrXEurp3rXraUdvDAbgHRaQCzZXQudf2bueMyVmCgoMczZz-eZxoGILVoX9PY6Og4Wbh65C-ylaCqdKMFWnB203xX0SZBQxBdONLf0Z48MlB7q-au4kuT3FVSl2YCUFkvdOITxV45V599GbPiNlhUwGOQUxOtZKvplbMDCripr~BlQxLzZszi6yk--0rHW1deIGapfDDvJHmbMFochwNGsw3lyk09681OQiT0jaEu8zcNWFkV52GDuX159Af5wTcyF0FCdhJuYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        altText: 'Two huge elephants on savanna',
    },
];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') return;

    // set status on response
    res.status(201).json({
        data: dummyData,
    });
};

export default handler;
