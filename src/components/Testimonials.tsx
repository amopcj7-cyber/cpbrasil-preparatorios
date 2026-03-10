import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Aprovada PMSP 2023',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'O material do professor Adagelson foi essencial para minha aprovação. Conteúdo direto ao ponto e exercícios que realmente caem na prova!',
    rating: 5,
  },
  {
    id: 2,
    name: 'João Santos',
    role: 'Aprovado INSS 2023',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Estudei apenas com a apostila da CPBRASIL e consegui minha aprovação em 4 meses. Melhor investimento que fiz!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Costa',
    role: 'Aprovada Nível Médio 2024',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Material completo e muito bem organizado. As dicas do professor fizeram toda diferença no dia da prova.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Carlos Oliveira',
    role: 'Aprovado Moço de Convés 2023',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Específico e objetivo. A apostila cobre tudo que precisa para passar. Recomendo 100%!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Fernanda Lima',
    role: 'Aprovada PMSP 2024',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Realizei meu sonho graças ao material da CPBRASIL. Professor Adagelson é simplesmente o melhor!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0A1F44] to-[#1A3A5C] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF6B35]/20 border border-[#FF6B35]/40 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
            <span className="text-sm font-semibold text-[#FF6B35]">Avaliação 5.0/5.0</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Veja o que nossos alunos aprovados têm a dizer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-[#FF6B35]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FF6B35]"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-[#FF6B35] text-sm font-medium">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#FF6B35]/30" />
                <p className="text-gray-200 text-sm leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white/20">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-[#FF6B35]">+5.000</span> Alunos Aprovados
            </p>
            <p className="text-gray-300">Junte-se aos aprovados da CPBRASIL</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
