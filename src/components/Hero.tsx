import { motion } from 'framer-motion';
import { BookOpen, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1F44] via-[#0F2952] to-[#1A3A5C] text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-full px-4 py-2 mb-6"
            >
              <Award className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm font-semibold text-[#FF6B35]">+5.000 Alunos Aprovados</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              CPBRASIL
              <span className="block text-[#FF6B35] mt-2">APROVAÇÃO GARANTIDA</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Prepare-se com quem entende de aprovação
            </p>

            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Material completo e atualizado com o Professor Adagelson Lima.
              Apostilas desenvolvidas para maximizar seu desempenho nas provas.
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-sm">Material Completo</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-sm">Metodologia Aprovada</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-sm">Resultados Comprovados</span>
              </div>
            </div>

            <motion.a
              href="#cursos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#FF6B35] hover:bg-[#ff5722] text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300"
            >
              Escolher Minha Apostila
            </motion.a>

            <p className="mt-4 text-sm text-gray-400">
              ⚡ Acesso imediato após o pagamento
            </p>
          </motion.div>

          <motion.div
            className="flex-1 max-w-md w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF6B35] rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professor Adagelson Lima"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">Professor Adagelson Lima</h3>
                <p className="text-gray-300 text-center mb-4">
                  Especialista em Concursos Públicos
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-[#FF6B35]">
                  <Award className="w-4 h-4" />
                  <span>15+ anos de experiência</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
