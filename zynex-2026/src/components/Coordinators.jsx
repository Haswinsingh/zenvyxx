import { motion } from "framer-motion";
import core1 from "../assets/core1.png";
import core2 from "../assets/core2.png";
import core3 from "../assets/core3.png";
import core4 from "../assets/core4.png";
import magic1 from "../assets/magic1.jpeg";
import magic2 from "../assets/magic2.jpeg";
import magic3 from "../assets/magic3.jpeg";
import magic4 from "../assets/magic4.jpeg";

const cardStyle =
  "relative rounded-xl overflow-hidden group cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]";

const magicCardStyle =
  "relative rounded-xl overflow-hidden group cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-secondary hover:shadow-[0_0_20px_rgba(138,43,226,0.5)]";

const imageStyle =
  "w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105";

const overlay =
  "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10";

const textBox =
  "absolute bottom-0 left-0 w-full p-6 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300";

const titleStyle = "text-2xl font-orbitron font-bold text-white mb-1 group-hover:text-primary transition-colors";
const roleStyle = "text-gray-300 font-medium";

const magicTitleStyle = "text-2xl font-orbitron font-bold text-white mb-1 group-hover:text-secondary transition-colors";

export default function Coordinators() {
  return (
    <div id="network" className="py-24 bg-black/40 text-white space-y-24">

      {/* CORE MEMBERS */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 uppercase">
            Core <span className="text-secondary">Members</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Member 1 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src={core1} className={imageStyle} alt="Core Member 1" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Dr. B. Latha</h3>
              <p className={roleStyle}>Full Stack Dev</p>
            </div>
          </motion.div>

          {/* Member 2 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src={core2} className={imageStyle} alt="Core Member 2" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Member Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 3 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src={core3} className={imageStyle} alt="Core Member 3" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Member Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 4 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src={core4} className={imageStyle} alt="Core Member 4" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Member Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 5 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src="/assets/core5.jpg" className={imageStyle} alt="Core Member 5" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Member Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAGIC MEMBERS */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 uppercase">
            Magic <span className="text-primary">Members</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Member 1 */}
          <motion.div
            className={magicCardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src={magic1} className={imageStyle} alt="Magic Member 1" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={magicTitleStyle}>Member Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 2 */}
          <motion.div
            className={magicCardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src={magic2} className={imageStyle} alt="Magic Member 2" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={magicTitleStyle}>Member Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 3 */}
          <motion.div
            className={magicCardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src={magic3} className={imageStyle} alt="Magic Member 3" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={magicTitleStyle}>Member Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 4 */}
          <motion.div
            className={magicCardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src={magic4} className={imageStyle} alt="Magic Member 4" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={magicTitleStyle}>Member Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 5 */}
          <motion.div
            className={magicCardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src="/assets/magic5.jpg" className={imageStyle} alt="Magic Member 5" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={magicTitleStyle}>Member Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EVENT COORDINATORS */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 uppercase">
            Event <span className="text-primary">Coordinators</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Member 1 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src="/assets/event1.jpg" className={imageStyle} alt="Event Coordinator 1" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Coordinator Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 2 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src="/assets/event2.jpg" className={imageStyle} alt="Event Coordinator 2" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Coordinator Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 3 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src="/assets/event3.jpg" className={imageStyle} alt="Event Coordinator 3" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Coordinator Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 4 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src="/assets/event4.jpg" className={imageStyle} alt="Event Coordinator 4" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Coordinator Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 5 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src="/assets/event5.jpg" className={imageStyle} alt="Event Coordinator 5" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Coordinator Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>

          {/* Member 6 */}
          <motion.div
            className={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <img src="/assets/event6.jpg" className={imageStyle} alt="Event Coordinator 6" />
            <div className={overlay}></div>
            <div className={textBox}>
              <h3 className={titleStyle}>Coordinator Name</h3>
              <p className={roleStyle}>Role</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

