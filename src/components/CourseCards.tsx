import { motion } from 'framer-motion';
import { Shield, FileText, Anchor, GraduationCap, Check, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'PMSP Preparatório',
    icon: Shield,
    description: 'Apostila completa para Polícia Militar de São Paulo',
    features: ['Material Atualizado 2024', 'Exercícios Práticos', 'Simulados Comentados', 'Dicas do Professor'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'INSS Preparatório',
    icon: FileText,
    description: 'Conteúdo específico para concurso do INSS',
    features: ['Legislação Atualizada', 'Questões Resolvidas', 'Mapas Mentais', 'Resumos Práticos'],
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 3,
    title: 'Moço de Convés',
    icon: Anchor,
    description: 'Material especializado para Marinha Mercante',
    features: ['Conteúdo Técnico', 'Regulamentos Marítimos', 'Exercícios Específicos', 'Glossário Náutico'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 4,
    title: 'Nível Médio',
    icon: GraduationCap,
    description: 'Preparatório geral para concursos de nível médio',
    features: ['Base Sólida', 'Português e Matemática', 'Conhecimentos Gerais', 'Técnicas de Prova'],
    color: 'from-purple-500 to-purple-600',
  },
];

const CourseCards = () => {
  return (
    <section id="cursos" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
            Escolha Seu Preparatório
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Material completo e atualizado por apenas <span className="text-[#FF6B35] font-bold">R$ 49,99</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                  <div className={`bg-gradient-to-br ${course.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <Icon className="w-12 h-12 mb-4 relative z-10" />
                    <h3 className="text-2xl font-bold mb-2 relative z-10">{course.title}</h3>
                    <p className="text-white/90 text-sm relative z-10">{course.description}</p>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#0A1F44] mb-1">
                          R$ 49,99
                        </div>
                        <div className="text-sm text-gray-500">
                          Pagamento único
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#FF6B35] hover:bg-[#ff5722] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group-hover:shadow-xl"
                      >
                        Comprar Agora
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-[#0A1F44] to-[#1A3A5C] text-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-3">🎁 Bônus Exclusivo</h3>
          <p className="text-gray-200 text-lg">
            Comprando hoje, você ganha acesso a atualizações gratuitas por 1 ano!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseCards;
