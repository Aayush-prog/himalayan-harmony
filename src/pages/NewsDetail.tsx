import PageHeader from '@/components/PageHeader';
import { Link, useParams } from 'react-router-dom';
import RaceMap from '@/components/RaceMap';
import { usePageTitle } from '@/hooks/usePageTitle';

const article = {
    title: "Race Results Published",
    date: "Jan 15, 2025",
    category: "Race Update",
    content: `
    <p class="mb-6 text-gray-300">The official results for the 2025 Himalayan Ultra have now been verified and published. We are thrilled to announce that this year's edition saw record-breaking performances across all categories.</p>
    
    <h3 class="text-xl font-bold text-white mb-2 uppercase">Men's Champion</h3>
    <p class="mb-6 text-gray-300">Guo Min secured the top spot in the H100 category with an incredible time of 10:38:53, battling through tough conditions in the final section of the course.</p>
    
    <h3 class="text-xl font-bold text-white mb-2 uppercase">Women's Champion</h3>
    <p class="mb-6 text-gray-300">Sunmaya Budha dominated the women's field, finishing in 12:15:20. Her performance on the MacLehose Trail was nothing short of spectacular.</p>
    
    <p class="text-gray-300">We want to thank all participants, volunteers, and sponsors for making this event possible. The spirit of the trail running community in Hong Kong is truly alive and well.</p>
  `,
    gallery: [
        '/news-action.png',
        '/hero-bg.png'
    ],
    showMap: true
};

export default function ArticlePage() {
    usePageTitle(article.title);
    const { id } = useParams();

    return (
        <div className="flex flex-col">
            <PageHeader title={article.title} subtitle={article.date} />

            <div className="container mx-auto px-4 py-16">
                <article className="max-w-4xl mx-auto bg-white/5 rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl">
                    <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                        <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{article.category}</span>
                        <Link to="/news" className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wide flex items-center gap-2">
                            <span>←</span> Back to News
                        </Link>
                    </div>

                    <div
                        className="prose prose-invert max-w-none mb-12"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Dynamic Image Gallery Section */}
                    {article.gallery && article.gallery.length > 0 && (
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-white uppercase mb-6 border-l-4 border-primary pl-4">Event Highlights</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {article.gallery.map((img, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden h-64 border border-white/10 group">
                                        <img
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Dynamic Map Section */}
                    {article.showMap && (
                        <div>
                            <h3 className="text-2xl font-bold text-white uppercase mb-2 border-l-4 border-primary pl-4">Race Route Overview</h3>
                            <p className="text-gray-400 text-sm mb-6 ml-5">The course verified for this result set matches the official 2025 route below.</p>
                            <div className="bg-black/20 rounded-xl overflow-hidden h-[400px] border border-white/10 w-full relative">
                                <RaceMap />
                            </div>
                        </div>
                    )}

                </article>
            </div>
        </div>
    );
}
