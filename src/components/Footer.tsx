import { motion } from 'framer-motion';
import { MessageCircle, CreditCard, Mail, MapPin, Phone, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0A1F44] via-[#0F2952] to-[#0A1F44] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white rounded-full p-3">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">WhatsApp</h3>
                  <p className="text-green-100 text-sm">Atendimento instantâneo</p>
                </div>
              </div>

              <p className="text-white/90 mb-6">
                Tire suas dúvidas, escolha sua apostila e receba suporte direto pelo WhatsApp
              </p>

              <motion.a
                href="https://wa.me/5511999999999?text=Olá,%20quero%20saber%20mais%20sobre%20as%20apostilas%20da%20CPBRASIL"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-green-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                Chamar no WhatsApp
              </motion.a>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
                <Shield className="w-4 h-4" />
                <span>Respondemos em até 5 minutos</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-[#FF6B35] to-[#ff5722] rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white rounded-full p-3">
                  <CreditCard className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Pix Instantâneo</h3>
                  <p className="text-white/90 text-sm">Acesso imediato</p>
                </div>
              </div>

              <p className="text-white/90 mb-6">
                Pagamento via Pix com aprovação automática e acesso liberado na hora
              </p>

              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/30">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">R$ 49,99</div>
                  <div className="text-sm text-white/90">Por apostila</div>
                  <div className="w-full h-px bg-white/30 my-4"></div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Pagamento seguro e criptografado</span>
                  </div>
                </div>
              </div>

              <motion.a
                href="#cursos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-[#FF6B35] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full justify-center"
              >
                <CreditCard className="w-6 h-6" />
                Comprar com Pix
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#FF6B35]">CPBRASIL</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Preparatórios de excelência para concursos públicos.
                Transformando sonhos em aprovações desde 2010.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Contato</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                  <span>contato@cpbrasil.com.br</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                  <span>São Paulo - SP, Brasil</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Nossos Cursos</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• PMSP Preparatório</li>
                <li>• INSS Preparatório</li>
                <li>• Moço de Convés</li>
                <li>• Nível Médio</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 CPBRASIL - Preparatórios para Concursos. Todos os direitos reservados.</p>
            <p className="mt-2">
              CNPJ: 00.000.000/0000-00 | Professor Adagelson Lima
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
